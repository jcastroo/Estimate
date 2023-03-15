<template>
  <div>
    <div class="flex flex-col">
      <div class="w-full from-white to-gray-100">
        <div class="w-full md:mx-auto flex flex-wrap mb-10 -mb-32 md:-mb-52 lg:-mb-72 md:pt-10 relative max-w-5xl">
          <div class="flex flex-col justify-center w-full text-center lg:pr-10 p-6 lg:p-10 relative z-10">
            <h1 dusk="title" class="text-4xl lg:text-5xl">
              Configurador <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">de
                Formulários</span><br>
            </h1>
            <h3 class="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Crie formulários e compartilhe-os em qualquer lugar. Leva segundos, <span class="font-medium">e é fácil</span>.
            </h3>
            <div class="mt-6 flex justify-center">
              <v-button class="mr-1" :to="{ name: 'forms.create.guest' }" :arrow="true">
                Criar Formulário
              </v-button>
            </div>
            <div class="justify-center flex gap-2 mt-10">
              <div class="flex items-center text-gray-400 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="w-4 h-4 mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Forms ilimitados</span>
              </div>
              <div class="flex items-center text-gray-400 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="w-4 h-4 mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>
                  Campos ilimitados
                </span>
              </div>
              <div class="flex text-gray-400 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="w-4 h-4 mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Respotas ilimitadas</span>
              </div>
            </div>
          </div>
          <div class="w-full shadow-2xl rounded-xl block max-w-2xl lg:max-w-5xl">

          </div>
        </div>
      </div>

      <div class="bg-white dark:bg-notion-dark-light pt-32 md:pt-52 lg:pt-72 pb-8">
        <div class="md:max-w-5xl md:mx-auto w-full">
          <features class="pt-20 pb-8" />
        </div>
      </div>

      <more-features />






      <div class="w-full p-12 md:p-24 text-center">
        <!--This is the background that overlays when the modal is active. It  has opacity, and that's why the background looks gray.-->
        <!-----
      add this code to this very first div:
      fixed inset-0
    -->
        <span class="hidden sm:inline-block sm:align-middle sm:" aria-hidden="true">​</span>
        <!--Modal panel : This is where you put the pop-up's content, the div on top this coment is the wrapper -->
        <div
          class="w-full inline-block p-5 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-2xl lg:p-16 sm:my-8 sm:align-middle ">
          <div>
            <div class="mt-3 text-left sm:mt-5">
              <div class="py-6 text-center">
                <p class="mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600">Demo</p>
                <p class="mt-1 text-sm text-gray-500">Exemplo de uma form criada com o Setup Estimate</p>
              </div>
            </div>
          </div>


          <div
            class="inline-block p-5 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-2xl lg:p-16 sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
            <div class="mt-3 text-left sm:mt-5">
              <div class="py-6 text-center">
                <label for="project-type">Tipo De Projeto</label>
                <select id="project-type" class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="projectType">
                  <option value="">Selecione o tipo</option>
                  <option value="web">Website</option>
                  <option value="mobile">Aplicacao Mobile</option>
                </select>
              </div>
            </div>
          </div>

          <br>
          <div
            class="inline-block p-5 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-2xl lg:p-16 sm:my-8 sm:align-middle sm:max-w-xl sm:w-full"
            v-if="projectType === 'web'">
            <div class="mt-3 text-left sm:mt-5">
              <div class="py-6 text-center">
                <div class="form-group">
                  <label for="web-platform">Platforma Web</label>
                  <select class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="web-platform" v-model="webPlatform">
                    <option value="">Selecione a platforma web</option>
                    <option value="wordpress">WordPress</option>
                    <option value="custom">Costumizada</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <br>




          <br>

          <div
            class="inline-block p-5 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-2xl lg:p-16 sm:my-8 sm:align-middle sm:max-w-xl sm:w-full"
            v-if="webPlatform === 'custom'">
            <div class="mt-3 text-left sm:mt-5">
              <div class="py-6 text-center">
                <div class="form-group">
                  <label for="custom-framework">Framework Costumizada:</label>
                  <ul class="grid w-full gap-6 md:grid-cols-3">
                    <li>
                      <input type="checkbox" id="laravel" value="laravel" class="hidden peer" required="">
                      <label for="laravel"
                        class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div class="block">

                          <div class="w-full text-lg font-semibold">Laravel</div>
                          <div class="w-full text-sm"></div>
                        </div>
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" id="nodejs" value="nodejs" class="hidden peer">
                      <label for="nodejs"
                        class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div class="block">

                          <div class="w-full text-lg font-semibold">Node.js</div>
                          <div class="w-full text-sm"></div>
                        </div>
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" id="django" value="django" class="hidden peer">
                      <label for="django"
                        class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div class="block">

                          <div class="w-full text-lg font-semibold">Django</div>
                          <div class="w-full text-sm"></div>
                        </div>
                      </label>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>

          <br>


          <div
            class="inline-block p-5 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-2xl lg:p-16 sm:my-8 sm:align-middle sm:max-w-xl sm:w-full"
            v-if="projectType === 'mobile'">
            <div class="mt-3 text-left sm:mt-5">
              <div class="py-6 text-center">

                <div class="form-group">
                  <label for="mobile-platform">Platforma Mobile</label>
                  <select class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="mobile-platform" v-model="mobilePlatform">
                    <option value="">Selecione a mobile platform</option>
                    <option value="ios">iOS</option>
                    <option value="android">Android</option>
                    <option value="cross-platform">Cross-platform</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <br>


          <div
            class="inline-block p-5 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-2xl lg:p-16 sm:my-8 sm:align-middle sm:max-w-xl sm:w-full"
            v-if="mobilePlatform === 'cross-platform'">
            <div class="mt-3 text-left sm:mt-5">
              <div class="py-6 text-center">

                <div class="form-group" v-if="mobilePlatform === 'cross-platform'">
                  <label for="cross-platform-framework">Cross-platform Framework</label>
                  <select class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="cross-platform-framework" v-model="crossPlatformFramework">
                    <option value="">Selecione a cross-platform framework</option>
                    <option value="react-native">React Native</option>
                    <option value="flutter">Flutter</option>
                  </select>
                </div>

              </div>
            </div>
          </div>

          <br>


          <div
            class="inline-block p-5 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-2xl lg:p-16 sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
            <div class="mt-3 text-left sm:mt-5">
              <div class="py-6 text-center">
                <label for="pages">Tamanho do Projeto</label>
                <select class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="project-size" v-model="projectSize">
                  <option value="">Selecione o tamanho do projeto</option>
                  <option value="small">Pequeno</option>
                  <option value="medium">Médio</option>
                  <option value="large">Grande</option>
                </select>
              </div>
            </div>
          </div>




          <h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Funcionalidades Adicionais:</h3>
          <ul class="grid w-full gap-6 md:grid-cols-3">
            <li>
              <input type="checkbox" id="react-option" value="BackOffice" class="hidden peer" required=""
                v-model="features">
              <label for="react-option"
                class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="block">

                  <div class="w-full text-lg font-semibold">BackOffice</div>
                  <div class="w-full text-sm">Painel Administrativo do site</div>
                </div>
              </label>
            </li>
            <li>
              <input type="checkbox" id="flowbite-option" value="Woocomerce" class="hidden peer" v-model="features">
              <label for="flowbite-option"
                class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="block">

                  <div class="w-full text-lg font-semibold">Woocomerce</div>
                  <div class="w-full text-sm">Configuração de um store</div>
                </div>
              </label>
            </li>
            <li>
              <input type="checkbox" id="angular-option" value="Marketing Digital" class="hidden peer" v-model="features">
              <label for="angular-option"
                class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="block">

                  <div class="w-full text-lg font-semibold">Marketing Digital</div>
                  <div class="w-full text-sm">Promoção do Projeto</div>
                </div>
              </label>
            </li>
          </ul>



          <br>
          <div class="grid max-w-screen-md gap-10 md:grid-cols-1 sm:mx-auto">
            <div>
              <div class="p-8 bg-gray-900 rounded">
                <div class="mb-4 text-center">
                  <p class="text-xl font-medium tracking-wide text-white">
                    Estimativa de Preco:
                  </p>
                  <div class="flex items-center justify-center">
                    <p class="mr-2 text-5xl font-semibold text-white lg:text-6xl" v-if="estimatedPrice">
                      {{ estimatedPrice }}

                    </p>
                  </div>
                </div>
                <ul class="mb-8 space-y-2">
                  <li class="flex items-center">
                    <div class="mr-3">
                      <svg class="w-4 h-4 text-teal-accent-400" viewBox="0 0 24 24" stroke-linecap="round"
                        stroke-width="2">
                        <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                        <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                      </svg>
                    </div>
                    <p class="font-medium text-gray-300">Tipo de Projeto: {{ projectType }}</p>
                  </li>
                  <li class="flex items-center" v-if="projectType === 'web'">
                    <div class="mr-3">
                      <svg class="w-4 h-4 text-teal-accent-400" viewBox="0 0 24 24" stroke-linecap="round"
                        stroke-width="2">
                        <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                        <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                      </svg>
                    </div>
                    <p class="font-medium text-gray-300">Tipo de Plataforma Web: {{ webPlatform }}</p>
                  </li>

      
                  <li class="flex items-center" v-if="projectType === 'mobile'">
                    <div class="mr-3">
                      <svg class="w-4 h-4 text-teal-accent-400" viewBox="0 0 24 24" stroke-linecap="round"
                        stroke-width="2">
                        <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                        <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                      </svg>
                    </div>
                    <p class="font-medium text-gray-300">Plataforma Mobile: {{ mobilePlatform }}</p>
                  </li>
                  <li class="flex items-center">
                    <div class="mr-3">
                      <svg class="w-4 h-4 text-teal-accent-400" viewBox="0 0 24 24" stroke-linecap="round"
                        stroke-width="2">
                        <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                        <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                      </svg>
                    </div>
                    <p class="font-medium text-gray-300">Tamanho do Projeto: {{ projectSize }}</p>
                  </li>
                  <li class="flex items-center">
                    <div class="mr-3">
                      <svg class="w-4 h-4 text-teal-accent-400" viewBox="0 0 24 24" stroke-linecap="round"
                        stroke-width="2">
                        <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                        <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                      </svg>
                    </div>
                    <p class="font-medium text-gray-300">Funcionalidades Adicionais: {{ features }}</p>
                  </li>
                </ul>
                <button type="submit"
                  class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                  Contactar
                </button>
              </div>
              <div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75"></div>
              <div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50"></div>
              <div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25"></div>
            </div>





          </div>
        </div>
      </div>
    </div>

    <div class="w-full bg-purple-500 p-12 md:p-24 text-center">
      <h4 class="font-semibold text-3xl text-white">Eleve os seus formulários para o próximo nível</h4>
      <p class="text-gray-300 my-8">We setup your world</p>
      <div class="mt-6 flex justify-center">
        <v-button :to="{ name: 'forms.create.guest' }" v-track.welcome_create_form_click :arrow="true" color="blue">
          Powered By Setup Tech
        </v-button>
      </div>

    </div>









    <open-form-footer class="dark:border-t border-t" />

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Features from '~/components/pages/welcome/Features.vue'
import MoreFeatures from '~/components/pages/welcome/MoreFeatures.vue'
import OpenFormFooter from '../components/pages/OpenFormFooter.vue'
import Testimonials from '../components/pages/welcome/Testimonials.vue'
import SeoMeta from '../mixins/seo-meta.js'



export default {
  components: { Testimonials, OpenFormFooter, Features, MoreFeatures },

  layout: 'default',

  mixins: [SeoMeta],

  data: () => ({

    projectType: '',
    numPages: 0,
    features: [],
    webPlatform: '',
    customFramework: '',
    mobilePlatform: '',
    crossPlatformFramework: '',
    projectSize: '',
    projectPrice: 0,
  }),

  mounted() {
  },

  methods: {


    redirectToCustomPage() {
      window.location.href = '/demo.blade.php';
    }
  },

  computed: {
    ...mapGetters({
      authenticated: 'auth/check'
    }),
    configLinks: () => window.config.links,

    estimatedPrice() {
      let basePrice = 0;
      let projectPriceSize=0;
      let webPlatformPrice=0;
      let projectFrameworkPrice=0;


      if (this.projectType === 'web') {
        basePrice = 500;
      } else if (this.projectType === 'mobile') {
        basePrice = 1500;
      }




      if (this.webPlatform === 'wordpress') {
        webPlatformPrice = 500;
      } else if (this.webPlatform === 'custom') {
        webPlatformPrice = 1500;
      }


      if (this.projectSize === 'small') {
        projectPriceSize = 500;
      } else if (this.projectSize === 'medium') {
        projectPriceSize = 1000;
      } else if (this.projectSize === 'large') {
        projectPriceSize = 1500;
      }


      if (this.customFramework === 'laravel') {
        projectFrameworkPrice = 500;
      } else if (this.customFramework === 'nodejs') {
        projectFrameworkPrice = 800;
      } else if (this.customFramework === 'django') {
        projectFrameworkPrice = 1000;
      }

      const numFeatures = this.features.length;
      const featurePrice = numFeatures * 100;

      const totalPrice = basePrice + featurePrice + projectPriceSize+projectFrameworkPrice+webPlatformPrice;

      return totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
    },
  }
}

</script>


<style lang="scss" scoped>.customer-logo-container {
  max-width: 130px;
  width: 100%;
}

@screen md {
  #macbook-video {
    position: absolute;
    max-width: 84.8% !important;
    right: 0px;
    top: 6.8%;
  }
}</style>
