<template>
  <div class="bg-[#F7F8FA]">

    <div class="mx-auto px-5 max-w-7xl">
      <!-- BreadCrumbs -->
      <div class="px-4 py-2.5 flex text-sm text-[#100D14] rounded items-center bg-[#F0F0F5]">

        <nuxt-link to="" class="px-1">آچیلان دُر</nuxt-link>

        <svg class="font-bold text-[#100D14]" fill="black" width="10px" height="10px" viewBox="0 0 32 32"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M 26 6 L 6 15.21875 L 6 16.78125 L 26 26 L 26 23.84375 L 9.46875 16 L 26 8.15625 Z"/>
        </svg>

        <nuxt-link to="" class="px-1">سوالات متداول</nuxt-link>

      </div>

      <div class="py-3 md:py-6 md:flex">

        <div class="md:w-1/3">

          <div class="p-6 w-full bg-white rounded">

            <svg class="mx-auto block" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
              <defs>
                <style>.afaq {
                  fill: #fff;
                  stroke: #decff6;
                }

                .bfaq, .cfaq {
                  fill: #591262;
                }

                .cfaq {
                  opacity: 0.4;
                }

                .dfaq {
                  stroke: none;
                }

                .efaq {
                  fill: none;
                }</style>
              </defs>
              <g transform="translate(-1316 -308)">
                <g class="afaq" transform="translate(1316 308)">
                  <rect class="dfaq" width="48" height="48" rx="4"/>
                  <rect class="efaq" x="0.5" y="0.5" width="47" height="47" rx="3.5"/>
                </g>
                <g transform="translate(1328.002 322.4)">
                  <g transform="translate(-0.002)">
                    <path class="bfaq"
                          d="M144.67,73.376a.636.636,0,0,1,.631.631.615.615,0,0,1-.315.545l-1.635.975a.71.71,0,0,0-.346.6v.459a.688.688,0,1,0,1.376,0V76.53l1.319-.8a2.037,2.037,0,0,0,.976-1.721A1.994,1.994,0,0,0,144.67,72h-1.493a2,2,0,0,0-2.007,2.007.688.688,0,1,0,1.376,0,.636.636,0,0,1,.631-.631h1.493Zm-.975,4.89a.917.917,0,1,0,.918.916A.905.905,0,0,0,143.695,78.266Zm14.666,7.672a6.231,6.231,0,0,0,1.515-4.039c0-3.645-3.225-6.6-7.2-6.6l-.035,0c.016.2.035.4.035.6,0,3.7-2.988,6.795-6.979,7.594a7.076,7.076,0,0,0,6.979,5.006,7.681,7.681,0,0,0,3.482-.824,7.735,7.735,0,0,0,3.429.824.283.283,0,0,0,.263-.173.289.289,0,0,0-.054-.313A10.48,10.48,0,0,1,158.361,85.939Zm-2.141-4.721-3.15,3.3a.751.751,0,0,1-.534.232.772.772,0,0,1-.539-.22l-1.5-1.5a.75.75,0,0,1,1.061-1.06l.957.957,2.62-2.745a.75.75,0,0,1,1.085,1.036Z"
                          transform="translate(-135.876 -69.3)"/>
                    <path class="cfaq"
                          d="M7.8,0C3.491,0,0,2.955,0,6.6a5.941,5.941,0,0,0,1.563,3.952A10.241,10.241,0,0,1,.076,12.715a.288.288,0,0,0-.054.313.283.283,0,0,0,.263.171,7.784,7.784,0,0,0,3.59-.9,8.882,8.882,0,0,0,3.922.9c4.309,0,7.8-2.955,7.8-6.6S12.107,0,7.8,0Zm.019,10.8a.918.918,0,1,1,.916-.919A.906.906,0,0,1,7.817,10.8ZM9.789,6.427,8.5,7.23v.057a.688.688,0,0,1-1.376,0V6.829a.708.708,0,0,1,.344-.6l1.635-.975a.618.618,0,0,0,.316-.545.636.636,0,0,0-.631-.631H7.3a.636.636,0,0,0-.631.631.688.688,0,0,1-1.376,0A2,2,0,0,1,7.3,2.7H8.79a1.994,1.994,0,0,1,1,3.727Z"
                          transform="translate(0.002)"/>
                  </g>
                </g>
              </g>
            </svg>

            <h3 class="py-4 text-lg text-center text-[#282828] font-bold">سوالات متداول</h3>

            <div class="pb-6 text-center">
              از این بخش می‌توانید سوالات پُر تکراری که عموما از ما پرسیده می‌شود را به همراه پاسخ آن مشاهده بفرمایید
            </div>

            <hr class="pb-6">

            <div class="text-center">
              در صورتی که سوال مورد نظر خود را نیافتید، می‌توانید از طریق راه‌های تماس با ما، سوال خود را با ما در میان
              بگذارید تا کارشناسان ما در سریع‌ترین زمان پاسخگوی شما باشند
            </div>

            <button
              class="mx-auto my-4 px-6 py-2 block items-center border text-sm text-white rounded-md shadow-sm shadow-[#2C053129] bg-[#4B1752] hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow">
              تماس با ما
            </button>

          </div>
        </div>

        <div class="md:pr-6 md:w-2/3">
          <div v-for="faq in this.questions" v-bind:key="faq.title" class="mb-3 p-4 border border-[#D7D7E0] rounded md:mb-6 hover:bg-[#F0F2F5]">

            <div @click="faq.state = !faq.state" class="flex items-center justify-between">
              <div class="flex items-center">

                <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <defs>
                    <style>.asq {
                      fill: #2c0531;
                    }</style>
                  </defs>
                  <g transform="translate(0 -32)">
                    <g transform="translate(0 32)">
                      <path class="asq"
                            d="M11.321,36.286H8.679A2.968,2.968,0,0,0,5.714,39.25v.429a.714.714,0,0,0,1.429,0V39.25a1.536,1.536,0,0,1,1.536-1.536h2.645a1.536,1.536,0,0,1,.772,2.862L9.4,41.924a1.613,1.613,0,0,0-.826,1.406v.813a.714.714,0,1,0,1.429,0V43.33a.178.178,0,0,1,.064-.142l2.7-1.349a2.963,2.963,0,0,0-1.44-5.554ZM9.286,45.929A1.071,1.071,0,1,0,10.357,47,1.072,1.072,0,0,0,9.286,45.929ZM17.143,32H2.857A2.857,2.857,0,0,0,0,34.857V49.143A2.857,2.857,0,0,0,2.857,52H17.143A2.857,2.857,0,0,0,20,49.143V34.857A2.858,2.858,0,0,0,17.143,32Zm1.429,17.143a1.43,1.43,0,0,1-1.429,1.429H2.857a1.43,1.43,0,0,1-1.429-1.429V34.857a1.43,1.43,0,0,1,1.429-1.429H17.143a1.43,1.43,0,0,1,1.429,1.429Z"
                            transform="translate(0 -32)"/>
                    </g>
                  </g>
                </svg></div>

                <p class="pr-3 font-medium">{{ faq.title }}</p>

              </div>

              <span v-if="faq.state">

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="3.077" viewBox="0 0 20 3.077">
                  <defs>
                    <style>.aminus {
                      fill: #999ba3;
                    }</style>
                  </defs>
                  <g transform="translate(-16 -224)">
                    <g transform="translate(16 224)">
                      <path class="aminus"
                            d="M34.462,227.077H17.538a1.538,1.538,0,0,1,0-3.077H34.462a1.538,1.538,0,0,1,0,3.077Z"
                            transform="translate(-16 -224)"/>
                    </g>
                  </g>
                </svg>

              </span>
              <span v-else>

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <defs>
                     <style>.aplus {
                       fill: #999ba3;
                     }</style>
                  </defs>
                  <g transform="translate(-16 -48)">
                    <g transform="translate(16 48)">
                      <path class="aplus"
                            d="M36,58a1.538,1.538,0,0,1-1.538,1.539H27.538v6.923a1.538,1.538,0,0,1-3.077,0V59.539H17.538a1.538,1.538,0,1,1,0-3.077h6.923V49.539a1.538,1.538,0,1,1,3.077,0v6.923h6.923A1.536,1.536,0,0,1,36,58Z"
                            transform="translate(-16 -48)"/>
                    </g>
                  </g>
                </svg>

              </span>
            </div>
            <div v-if="faq.state" class=" mt-4 p-4 border-t">
              {{ faq.body }}
            </div>

          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "frequentlyAskedQuestions",
  data() {
    return {
      questions: [
        {
          state: false,
          title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
          body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
        },
        {
          state: false,
          title: 'لورم ایپسوم متن ساختگی',
          body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
        },
        {
          state: false,
          title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
          body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
        },
        {
          state: false,
          title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
          body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
        },
        {
          state: false,
          title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
          body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
        },
        {
          state: false,
          title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است',
          body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
