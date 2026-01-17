export const contactContent = `
<article class="contact active bg-eerie-black-2 border border-jet rounded-[20px] p-[15px] shadow-1 z-[1] md:p-[30px] animate-fade">
  <header>
    <h2 class="h2 article-title text-white-2 capitalize text-[24px] font-semibold pb-[15px] relative mb-[30px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[3px] after:bg-text-gradient-yellow after:rounded-[3px]">Contact</h2>
  </header>

  <section class="timeline mb-[30px]">
    <div class="title-wrapper flex items-center gap-[15px] mb-[25px]">
       <div class="icon-box relative bg-border-gradient-onyx w-[30px] h-[30px] rounded-[8px] flex justify-center items-center text-[16px] text-orange-yellow-crayola shadow-1 z-[1] md:w-[48px] md:h-[48px]">
        <ion-icon name="send-outline"></ion-icon>
        <div class="absolute inset-[1px] bg-eerie-black-1 rounded-[inherit] -z-[1]"></div>
      </div>
      <h3 class="h3 text-white-2 capitalize text-[18px]">Contact Form</h3>
    </div>

    <form action="#" class="form mb-[10px]">
      <div class="input-wrapper grid grid-cols-1 gap-[25px] mb-[25px] md:grid-cols-2 md:gap-[30px]">
        <input type="text" name="fullname" class="form-input bg-transparent text-white-2 text-[15px] p-[13px_20px] border border-jet rounded-[14px] outline-none focus:border-orange-yellow-crayola" placeholder="Full name" required>
        <input type="email" name="email" class="form-input bg-transparent text-white-2 text-[15px] p-[13px_20px] border border-jet rounded-[14px] outline-none focus:border-orange-yellow-crayola" placeholder="Email address" required>
      </div>
      <textarea name="message" class="form-input bg-transparent text-white-2 text-[15px] p-[13px_20px] border border-jet rounded-[14px] outline-none focus:border-orange-yellow-crayola min-h-[100px] resize-y mb-[25px]" placeholder="Your Message" required></textarea>
      <button class="relative w-full bg-border-gradient-onyx text-orange-yellow-crayola flex justify-center items-center gap-[10px] p-[13px_20px] rounded-[14px] text-[15px] capitalize shadow-3 z-[1] transition hover:bg-gradient-yellow-1 md:w-max md:ml-auto">
        <ion-icon name="paper-plane"></ion-icon><span>Send Message</span>
        <div class="absolute inset-[1px] bg-gradient-jet rounded-[inherit] -z-[1]"></div>
      </button>
    </form>
  </section>

  <section class="mapbox relative h-[250px] w-full rounded-[16px] mb-[30px] border border-jet overflow-hidden md:h-[380px]">
    <figure class="h-full">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63245.97055414075!2d110.37484495000001!3d-7.803250450000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5787bd5b6bc5%3A0x21723fd4d3684f71!2sYogyakarta%2C%20Kota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1751367233167!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" class="w-full h-full grayscale invert"></iframe>
    </figure>
  </section>
</article>
`;