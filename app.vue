<template>
   <ClientOnly>
    <div class="slider-container scroll-smooth  overflow-hidden md:flex md:flex-col">
    
    <!-- Landing page -->
    <div class="slider-section">
      <LandingPage/>
    </div>

    <section class="slider-section">
      <Aboutus/>
    </section>

    <section  class="slider-section">
      <Projects/>
    </section>

    <section class="slide-section">
      <Contactme1 />
    </section>
    <section  class="slider-section">
      <News/>
    </section>

    <section class="slide-section">
      <Footer    />
    </section>
</div>
   </ClientOnly>

</template>
<style scoped>
.slider-container {
  overflow-y: scroll;
  height: 100vh   ; /* Set the height of the slider */
  scroll-snap-type: y mandatory;
}

.slider-section {
  block-size: 100%;
  scroll-snap-align: start;
}
</style>