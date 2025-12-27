import React, { useState } from 'react'
import EmojiPicker from 'emoji-picker-react'
import { LuImage, LuX} from 'react-icons/lu'


const EmojiPickerPopup = ({ icon, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleEmojiSelect =(emoji) => {
        onSelect(emoji?.imageUrl || "")
        setIsOpen(false) // closes pop on selecting emoji
    }
  return (
    <div className='flex flex-col md:flex-row items-start gap-1 mb-1'>
        <div className='flex items-center gap-4 cursor-pointer' onClick={() => setIsOpen((prev) => !prev)}>
            <div className='w-12 h-12 flex items-center justify-center text-2xl bg-purple-50 text-primary rounded-lg'>
                {icon ? (
                    <img src={icon} alt='Icon' className='w-12 h-12 object-contain'/>
                ) : (
                    <LuImage/>
                )}
            </div>
            <p className=''>{icon ? "Change Icon" : "Pick Icon"}</p>
        </div>
        {isOpen && (
            <div className='relative mt-1'>
                <button className='w-7 h-7 flex items-center justify-center bg-white border border-gray-200 rounded-full absolute -top-2 -right-2 z-10 cursor-pointer' 
                onClick={() => setIsOpen(false)}>
                    <LuX size={16}/>
                </button>
                <div className='inline-block'>
                    <EmojiPicker
                        open={isOpen}
                        onEmojiClick={handleEmojiSelect}
                        height={350}
                        width={350}
                    />
                </div>
            </div>
        )}
    </div>
  )
}

export default EmojiPickerPopup