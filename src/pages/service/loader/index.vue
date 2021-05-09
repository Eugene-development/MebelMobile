<template>
  <div class="relative py-16 bg-white overflow-hidden">
    <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
      <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
        <svg class="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
          <defs>
            <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
        </svg>
        <svg class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
          <defs>
            <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
        </svg>
        <!--        <svg class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">-->
        <!--          <defs>-->
        <!--            <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">-->
        <!--              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />-->
        <!--            </pattern>-->
        <!--          </defs>-->
        <!--          <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />-->
        <!--        </svg>-->
      </div>
    </div>

    <div class="relative px-4 sm:px-6 lg:px-8">
      <div class="text-lg max-w-prose mx-auto">
        <h1>
          <!--          <span class="block text-base text-center text-teal-800 font-semibold tracking-wide uppercase">О нашей компании</span>-->
          <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-teal-800 sm:text-4xl">Доставка</span>
        </h1>
        <p class="mt-8 text-xl text-gray-500 leading-8">Мы организуем доставку заказов до вашего подъезда, предварительно согласовав с вами время.</p>
        <!--        <p class="mt-8 text-xl text-gray-500 leading-8">Стоимость доставки по городу:</p>-->
      </div>
      <blockquote class="mt-4 max-w-4xl mx-auto relative bg-gray-50 rounded-lg shadow-lg">
        <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
          <h3>Цены на доставку по городу</h3>

          <div class="relative text-lg text-gray-700 font-medium mt-8">

            <!-- This example requires Tailwind CSS v2.0+ -->
            <div class="flex flex-col ">
              <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                      <thead class="bg-teal-800">
                      <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                          район
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                          цена
                        </th>
                      </tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-200">
                      <tr>
                        <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                          Автозаводский
                        </td>
                        <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                          500 рублей
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                          Ленинский, Канавинский
                        </td>
                        <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                          600 рублей
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                          Сормовский
                        </td>
                        <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                          700 рублей
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                          Верхняя часть
                        </td>
                        <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                          800 рублей
                        </td>
                      </tr>

                      <!-- More items... -->
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <cite class="relative flex items-center sm:items-start bg-teal-800 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
              <span class="text-indigo-300 font-semibold leading-6 sm:pl-1">
              <p class="text-white font-semibold sm:inline">Цена доставки за город рассчитывается индивидуально</p>
            </span>
        </cite>
      </blockquote>
    </div>
  </div>

</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>
