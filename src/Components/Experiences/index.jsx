import Experience from "./Experience"

function Experiences(){
    return (
        <>

<section class="py-24 bg-gray-900 w-full overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="max-w-7xl mx-auto">
      <div class="mb-10 md:max-w-4xl mx-auto text-center"><span class="inline-block mb-4 text-sm text-blue-500 font-bold uppercase tracking-widest">My Experiences</span>
        <h2 class="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-tight">Professional Journey</h2>
      </div>
      <div class="flex flex-wrap -m-3">
        <Experience/>
      </div>
    </div>
  </div>
</section>


        </>
    )
}

export default Experiences