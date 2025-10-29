import type React from "react"

interface branchProbs {
    name: string,
    address: string,
    span?: string
}

const BranchCard: React.FC<branchProbs> = ({ name, address, span}) => {



    return (
        <div className={`flex items-center justify-center flex-col border border-[#E5E5E5] rounded-xl h-[245px]
        ${span ? "pb-24" : "" } `} >
           <p className={`${span == "main" ? "bg-[#3983b20f] " : "bg-white"} text-[#3983b2] text-center mt-0 mb-auto rounded-bl-3xl rounded-br-3xl px-8 py-2`} >
                {span == "main" && 
                "الفرع الرئيسي"
            
                    }    </p>
            <p className="text-xl font-semibold" >{name}</p>
            <p  className="text-md  font-normal text-[#848587]" >{address}</p>
        </div>
    )
}

export default BranchCard