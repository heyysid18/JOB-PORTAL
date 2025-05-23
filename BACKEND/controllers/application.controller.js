import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

export const applyJob = async(req,res) =>{
    try {
        const userId = req.id;
        const jobId = req.params.id;
        if(!jobId){
            return res.status(400).json({
                message:"job id is requierd",
                success:false,
            })
        };
        const existingApplication = await Application.findOne({job:jobId,applicant:userId});
        if(existingApplication){
            return res.status(400).json({
                message:"You have alreaady applied in this job",
                success:false,
            });
        }
        const job = await Job.findById(jobId);
        if(!job){
            return res.status(404).json({
                message:"job not found",
                success:false,
            })
        }
        //create new application
        const newApplication = await Application.create({
            job:jobId,
            applicant:userId,
        });
        job.applications.push(newApplication._id);
        await job.save();
        return res.status(201).json({
            message:"Job applied succesfully",
            success:true,
        })
    } catch (error) {
        console.log(error);
    }
};
export const getAppliedJobs = async (req,res) =>{
    try {
        const userId = req.id;
        const application = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
            path:'job',
            option:{sort:{createdAt:-1}},//to get in sorted order
            populate:{
                path:"company",
                option:{sort:{createdAt:-1}},
            }
        });
        if(!application){
            return res.status(404).json({
                message:"No application",
                success:false,
            })
        };
        return res.status(200).json({
            application,
            success:false
        })
    } catch (error) {
        console.log(error)
    }
}
//to see how many users have applied
export const getApplicants = async (req,res)=>{
    try {
        const jobId = req.params.id;
        const job = await Job/findById(jobId).populate({
            path:'applications',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'applicant'
            }
        });
        if(!job){
            return res.status(404).json({
                message:"job not found",
                success:false,
            })
        }
        return res.status(200).json({
            job,
            success:true,
        })
    } catch (error) {
        console.log(error)
    }
}
export const updatedStatus = async(req,res) =>{
    try {
        const {status} = req.body;
        const applicationId = req.params.id;
        if(!status){
            return res.status(400).json({
                message:"Status is required",
                success:false
            })
        };
        const application = await Application.findOne({_id:applicationId});
        if(!application){
            return res.status(404).json({
                meesage:"applicatiopn  not found",
                success:false,
            })
        };
        //Update status
        application.status = status.toLowercase();
        await application.save();
        return res.status(200).json({
            message:"Job applied succesddfully",
            suceess:true,
        })
    } catch (error) {
        console.log(error);
    }
}