import React from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const SelectGenderCard = ({ setGender }) => {

    const handleGenderChange = (value) => {
        setGender(value === "default" ? "" : value)
    }

    return (
        <RadioGroup className="my-2 py-4 rounded w-full bg-secondary text-(--text)"
            defaultValue="default" onValueChange={  handleGenderChange} >
            <div className="flex justify-center items-center gap-3">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">Default</Label>
            </div>
            <div className='flex justify-center gap-3'>
                <div className="flex items-center gap-3">
                    <RadioGroupItem value="male" id="r2" />
                    <Label htmlFor="r2">Male</Label>
                </div>
                <div className="flex items-center gap-3">
                    <RadioGroupItem value="female" id="r3" />
                    <Label htmlFor="r3">Female</Label>
                </div>
            </div>
        </RadioGroup>
    )
}

export default SelectGenderCard