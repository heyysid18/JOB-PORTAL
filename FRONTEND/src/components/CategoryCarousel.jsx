import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
]

const CategoryCarousel = () => {
    
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const searchJobHandler = (query) => {
            dispatch(setSearchedQuery(query));
            navigate("/browse");
        }
  return (
    <div>
            <Carousel className="w-full max-w-xl mx-auto my-20 text-gray-100 bg-green">
                <CarouselContent className="text-gray-100">
                    {
                        category.map((cat, index) => (
                            <CarouselItem className="md:basis-1/2 lg-basis-1/3">
                                <Button  onClick={()=>searchJobHandler(cat)} className="rounded-full">{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
    </div>
  )
}

export default CategoryCarousel