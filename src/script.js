const smallcard = document.getElementById("smallcard");
const props = document.getElementById("properties");
const benefits = [1, 2, 3, 4, 5, 6];
const properties = [1, 2, 3, 4, 5, 6];

smallcard.innerHTML = benefits
  .map(
    (item, id) =>
      `
    <div class="space-y-4">
                    <div class="w-[5rem] h-[5rem] bg-orange-500 shadow-lg"></div>
                    <h3 class="text-lg font-bold">Pay as little <br> as possible</h3>
                </div>
    `
  )
  .join("");
// props.innerHTML = properties
//   .map(
//     (item, id) =>
//       `
//     <div class="flex flex-col gap-y-4 bg-gray-500">
//                     <div class="w-full h-full">
//                     <img/>
//                     </div>
//                     <h3 class="text-lg font-bold">Pay as little <br> as possible</h3>
//                 </div>
//     `
//   )
//   .join("");
const path = "./assets/property1.png";
props.innerHTML = properties
  .map(
    (item, id) =>
      `
    <div class="flex flex-col bg-white border border-gray-700 rounded-[1.5rem] shadow-xl">
    <div class="w-full h-full">
    <img src='${path}'/>
    </div>
        <div class='px-6'>
        <h2 class='text-xl font-bold'>
        2578 Folsom Street, San Fransisco, CA, 94110 
        <h2>
       <div>
       <p class='text black/80'>Private room</p>
       <h2 class='font-bold text-xl text-orange-500'>$1200/month</h2>
       </div>
        </div>
       <ul class='border-t border-black flex justify-between px-2 py-0'>
       <li class='w-full text-center py-2'>a</li>
       <li class='w-full border-x text-center py-2 border-black'>b</li>
       <li class='w-full text-center py-2'>c</li>
       </ul>
    </div>
    `
  )
  .join("");
