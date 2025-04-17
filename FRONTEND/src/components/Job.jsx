import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Bookmark, BookmarkIcon } from "lucide-react";
import { Badge } from './ui/badge'
import { useNavigate } from "react-router-dom";

const Job = ({job}) => {
    const navigate = useNavigate();
    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference/(1000*24*60*60));
    }
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
    <div className='flex items-center justify-between'>
        <p className='text-sm text-gray-500'>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
        <button  className="px-2 py-1 text-xs font-medium rounded"><BookmarkIcon className="w-6 h-6 text-gray-100" /></button>
    </div>

    <div className='flex items-center gap-2 my-2'>
    
    <a href="/profile" className="avatar-link">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" alt="User Avatar" className="w-8 h-8 rounded-full object-cover" />
</a>
        <div>
            <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
            <p className='text-sm text-gray-500'>India</p>
        </div>
    </div>

    <div>
        <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
        <p className='text-sm text-gray-600'>{job?.description}</p>
    </div>
    <div className='flex items-center gap-2 mt-4'>
        <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
        <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}Full Time</Badge>
        <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
    </div>
    <div className='flex items-center gap-4 mt-4'>
        <Button onClick={()=> navigate(`/description/${job?._id}`)} variant="outline" className="text-gray-100">Details</Button>
        <Button className="bg-[#7209b7]">Save For Later</Button>
    </div>
</div>

  );
};

export default Job;
