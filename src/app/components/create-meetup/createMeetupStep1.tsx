import React from 'react';
import {Input, Button} from "@nextui-org/react";

export default function CreateMeetupStep1({name, description, setName, setDescription, changeStep, setImage, image} : {name: string, description: string, setName: (name: string) => void, setDescription: (description: string) => void, changeStep: () => void, setImage: (image: string) => void, image: string}){

    return (
        <div className=" flex justify-center items-center h-full w-full">
            <div className="flex flex-col rounded-xl dark:bg-transparent bg-white p-16 w-auto h-auto">
                <p className="text-2xl font-bold dark:text-white mb-4">What&apos;s your meetup called?</p>
                <Input placeholder={name || "Meetup name"} className="w-full" onValueChange={setName}/>
                <Input placeholder={description || "Write a short description"} className="w-full mt-2" onValueChange={setDescription}/>
                <Input placeholder={image || "Add an image!"} className="w-full mt-2" onValueChange={setImage}/>
                {image && <img src={image} alt="Meetup image" className="max-w-2/3 h-40 object-cover rounded-xl mt-2"/>}
                <Button color="primary" isDisabled={name == "" || description == ""} className="mt-2 w-full" onClick={changeStep}>Continue</Button>
            </div>
        </div>
    );
}