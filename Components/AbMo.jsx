import React from 'react'

const AbMo = () => {
  return (
     <section className='w-11/12 py-10 flex flex-col gap-8'>
        <div className="flex flex-col items-center lg:flex-row gap-3 justify-between">
            <div className='w-full lg:w-1/2 flex flex-col gap-5'>
         <p className='font-bold text-pink-400 text-5xl'>What Is Breast Cancer?</p>
         <p className='font-bold text-slate-400 text-q'>A breast is made up of three main parts: lobules, ducts, and connective tissue. The lobules are the glands that produce milk. The ducts are tubes that carry milk to the nipple. The connective tissue (which consists of fibrous and fatty tissue) surrounds and holds everything together.</p>
         <p className='font-bold  text-slate-400 text-q'>Breast cancer is a disease in which cells in the breast grow out of control. There are different kinds of breast cancer. The kind of breast cancer depends on which cells in the breast turn into cancer.</p>
         <p className='font-bold  text-slate-400 text-q'>Most breast cancers begin in the ducts or lobules. Breast cancer can spread outside the breast through blood vessels and lymph vessels. When breast cancer spreads to other parts of the body, it is said to have metastasized.</p>
         </div>
         <div className='w-full md:w-2/3 lg:w-2/5'>
            <img src="/female-breast-diagram-750px.jpg" className=' object-contain' width="100%" height="100%" alt="" />
            <p className='font-bold  text-slate-400 text-q'>This diagram of the breast shows the location of the lobules, lobe, duct, areola, nipple, and fat.</p>
         </div>
         </div>
         <div className="flex flex-col gap-4">
            
            <h1 className='font-bold text-pink-400 text-5xl'>Kinds of Breast Cancer</h1>
            <p className='font-bold text-pink-300 text-xl'>The most common kinds of breast cancer are—</p>
            <ol className=' list-disc ml-4'>
                <li className='text-slate-600'> <span className='font-bold text-black'>Invasive ductal carcinoma.</span> The cancer cells begin in the ducts and then grow outside the ducts into other parts of the breast tissue. Invasive cancer cells can also spread, or metastasize, to other parts of the body.</li>
                <li className='text-slate-600'> <span className='font-bold text-black'>Invasive lobular carcinoma.</span> Cancer cells begin in the lobules and then spread from the lobules to the breast tissues that are close by. These invasive cancer cells can also spread to other parts of the body.</li>
            </ol>
         </div>
     </section>
  )
}

export default AbMo