const PostImage = () => {
  return (
    <div>
        <div className="w-[1200px] mx-auto p-24">
            <div className="grid grid-cols-4 grid-rows-2 gap-1">
                <div className="relative col-span-2 row-span-2">
                    <img className="w-full h-[565px] object-cover" src="/public/adobestock-204287225-preview-1@2x.png" alt="garten spaten"/>
                    <div className="absolute left-0 w-full p-2 text-lg font-semibold text-white bg-black top-3 bg-opacity-30">garten spaten</div>
                </div>
                <div className="relative h-[277px]">
                    <img className="object-cover w-full h-full" src="/public/gtgre-1@2x.png" alt="schlammkuchen"/>
                    <div className="absolute left-0 w-full p-2 text-lg font-semibold text-white bg-black top-3 bg-opacity-30">schlammkuchen</div>
                </div>
                <div className="relative h-[277px]">
                    <img className="object-cover w-full h-full" src="/public/ffgdsa-1@2x.png" alt="klemmen"/>
                    <div className="absolute left-0 w-full p-2 text-lg font-semibold text-white bg-black top-3 bg-opacity-30">klemmen</div>
                </div>
                
                
                <div className="relative h-[277px]">
                    <img className="object-cover w-full h-full" src="/public/gggrrr-1@2x.png" alt="sand"/>
                    <div className="absolute left-0 w-full p-2 text-lg font-semibold text-white bg-black top-3 bg-opacity-30">sand</div>
                </div>
                <div className="relative h-[277px]">
                    <img className="object-cover w-full h-full" src="/public/bfdsa-1@2x.png" alt="pflanzer"/>
                    <div className="absolute left-0 w-full p-2 text-lg font-semibold text-white bg-black top-3 bg-opacity-30">pflanzer</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostImage