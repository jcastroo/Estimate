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







    </div>


    <div class="w-full p-12 md:p-24 text-center">

        <span class="hidden sm:inline-block sm:align-middle sm:" aria-hidden="true">​</span>
        <div
          class="w-full inline-block p-5 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-2xl lg:p-16 sm:my-8 sm:align-middle ">
          <iframe style="border:none;width:100%;" height="1310px" src="http://127.0.0.1:8000/forms/questionario-livro-de-elogios"></iframe>

        </div>


    </div>



    <div class="w-full p-12 md:p-24 text-center">

        <span class="hidden sm:inline-block sm:align-middle sm:" aria-hidden="true">​</span>
        <div
          class="w-full inline-block p-5 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-2xl lg:p-16 sm:my-8 sm:align-middle ">
          <iframe style="border:none;width:100%;" height="960px" src="http://127.0.0.1:8000/forms/configurador-de-plataforma"></iframe>

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

</style>
