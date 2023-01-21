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
props.innerHTML = properties
  .map(
    (item, id) =>
      `
    <div class="flex flex-col gap-y-4 bg-gray-500">
                    <div class="w-full h-full">
                    <img/>
                    </div>
                    <h3 class="text-lg font-bold">Pay as little <br> as possible</h3>
                </div>
    `
  )
  .join("");
