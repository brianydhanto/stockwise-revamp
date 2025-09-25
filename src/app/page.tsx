'use client'

import Image from 'next/image';
import { RevealWrapper } from  'next-reveal'
export default function Home() {

  return (
    <>
      <RevealWrapper>
        <section className="min-h-screen flex items-center justify-center py-32 md:py-24">
          <div>
            <div className="flex flex-wrap gap-6 md:gap-16">
              <div className="flex-1/2 self-center">
                <h1 className="text-3xl md:text-6xl mb-4">Belajar Investasi Saham</h1>
                <h2 className="text-3xl md:text-6xl text-primary mb-2">Untuk Mendapatkan Keuntungan Ratusan Persen</h2>
                <h3>Member Stockwise berhasil mengalahkan IHSG sampai <span className="text-primary">67x lipat</span> di tahun 2023</h3>
              </div>
              <div className="self-center flex-auto justify-items-center flex-">
                <iframe  
                  className="w-[300px] h-[200px] md:w-[700px] md:h-[400px] xl:w-[500px] xl:h-[300px]"
                  title="Stockwise"
                  src={`https://www.youtube.com/embed/H3ohBjXW1bY`}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                </iframe>
              </div>
            </div>
            <div className="mt-12 flex justify-center xl:justify-start">
              <button className="btn-primary w-[16rem] h-[4rem] cursor-pointer text-xl md:text-2xl">JOIN NOW</button>
            </div>
          </div>
        </section>
      </RevealWrapper>
      
      <section className="min-h-screen flex items-center justify-center py-24">
        <div >
          <RevealWrapper>
          <div className="text-7xl md:text-9xl text-center">
            OUR <span className="text-primary">BIGGEST WIN</span>
          </div>
          </RevealWrapper>
          <RevealWrapper>
          <div className="grid gap-4 grid-flow-row xl:grid-flow-col mt-12 justify-center">
            <Image width={300} height={100} src="/bw-1.webp" alt="biggest-wins-1"></Image>
            <Image width={300} height={100} src="/bw-2.webp" alt="biggest-wins-2"></Image>
            <Image width={300} height={100} src="/bw-3.webp" alt="biggest-wins-3"></Image>
            <Image width={300} height={100} src="/bw-4.webp" alt="biggest-wins-4"></Image>
          </div>
          </RevealWrapper>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center py-24">
        <div>
          <RevealWrapper>
          <div className="text-6xl md:text-6xl text-center">
            MEET OUR <span className="text-primary">FOUNDERS</span>
          </div>
          </RevealWrapper>
          <RevealWrapper>
          <div className="grid gap-4 grid-flow-col justify-center mt-12">
            <div>
              <Image width={600} height={400} src="/founder-1.webp" alt="founder-1"></Image>
              <div className="flex flex-col justify-center mt-4">
                <span className="text-primary text-2xl md:text-3xl self-center">Andry Hakim</span>
                <span className="text-center text-sm md:text-xl self-center">Investor & Entrepreneur</span>
              </div>
            </div>
            <div>
              <Image width={600} height={400} src="/founder-2.webp" alt="founder-2"></Image>
              <div className="flex flex-col justify-center mt-4">
                <span className="text-primary text-2xl md:text-3xl self-center">Douglas Goh</span>
                <span className="text-center text-sm md:text-xl self-center">Investor & Entrepreneur</span>
              </div>
            </div>
          </div>
          </RevealWrapper>
          <RevealWrapper>
          <div className="mt-16 flex flex-col gap-1 text-[8px] md:text-xl">
            <span className="text-center">Kalian akan langsung diajarkan oleh Andry Hakim, seorang Entrepreneur dengan total gain +20,000% selama 3 tahun terakhir,</span>
            <span className="text-center">dan juga Douglas Goh yang juga Entrepreneur dengan background non-financial,</span>
            <span className="text-center">berhasil mendapatkan +550% gain dalam kurang dari 1 tahun!</span>
          </div>
          </RevealWrapper>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center py-24">
        <div>
          <RevealWrapper>
          <div className="text-6xl text-center mb-12">
            MEMBER <span className="text-primary">BENEFIT</span>
          </div>
          </RevealWrapper>

          <RevealWrapper>
          <div className="text-xl md:text-3xl text-center mb-4">
            Apa yang kamu dapat setelah bergabung?
          </div>
          </RevealWrapper>

          <RevealWrapper>
          <div className="text-center text-xs md:text-xl px-0 md:px-48 mb-24">
            Sebagai Stockwise member kalian akan mendapat banyak manfaat yang dapat mempercepatmu mendapat keuntungan ratusan persen di pasar saham
          </div>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center mx-auto w-full">
            <RevealWrapper>
            <div className="flex gap-6 self-center">
              <div className="self-center flex-1 justify-items-center">
                <div className="circle">
                  1
                </div>
              </div>
              <div className="self-center text-sm md:text-2xl">
                Kalian akan dibimbing dan mendapatkan modul belajar mengenai <span className="text-primary">pasar saham, finansial hingga cara investasi multibagger dari Andry Hakim.</span>
              </div>
            </div>
            </RevealWrapper>
            <RevealWrapper>
            <div className="flex gap-6 self-center">
              <div className="self-center flex-1 justify-items-center">
                <div className="circle">
                  2
                </div>
              </div>
              <div className="self-center text-sm md:text-2xl">
                <span className="text-primary">Kalian akan dapat akses eksklusif stock research dari Stockwise</span> untuk dapat membantu kalian bisa menganalisa saham lebih baik.
              </div>
            </div>
            </RevealWrapper>
            <RevealWrapper>
            <div className="flex gap-6 self-center">
              <div className="self-center flex-1 justify-items-center">
                <div className="circle">
                  3
                </div>
              </div>
              <div className="self-center text-sm md:text-2xl">
                <span className="text-primary">Kalian akan berkesempatan mendapatkan akses spesial</span> untuk mengikuti acara special dari Stockwise.
              </div>
            </div>
            </RevealWrapper>
            <RevealWrapper>
            <div className="flex gap-6 self-center">
              <div className="self-center flex-1 justify-items-center">
                <div className="circle">
                  4
                </div>
              </div>
              <div className="self-center text-sm md:text-2xl">
                Kalian bisa berdiskusi mengenai saham di <span className="text-primary">komunitas saham terbesar di Indonesia.</span>
              </div>
            </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center py-24">
        <div>
          <RevealWrapper>
          <div className="text-3xl md:text-6xl text-center mb-4 text-primary">
            TESTIMONIALS
          </div>

          <div className="text-md md:text-3xl text-center mb-12">
            Kata mereka yang sudah untung 100%+
          </div>
          </RevealWrapper>

          <RevealWrapper>
          <div className="grid grid-flow-row xl:grid-flow-col gap-6 justify-center">
            <div>
              <div className="testimonial flex flex-col justify-between">
                <p className="text-md md:text-xl">&#8220;Thanks ko Andry Hakim & Douglas Goh, ngga bakal nyesel buat terus belajar sama para master&#8221;</p>
                <div className="self-end">Stockwise Member</div>
              </div>
            </div>
            <div>
              <div className="testimonial flex flex-col justify-between">
                <p className="text-md md:text-xl">&#8220;Always a silent learner here, thank you ko Andry Hakim & Douglas Goh, cuan terusss&#8221;</p>
                <div className="self-end">Stockwise Member</div>
              </div>
            </div>
            <div>
              <div className="testimonial flex flex-col justify-between">
                <p className="text-md md:text-xl">&#8220;Akhirnya menyusul master Andry Hakim & Douglas Goh, thanks buat ilmu nya&#8221;</p>
                <div className="self-end">Stockwise Member</div>
              </div>
            </div>
          </div>
          </RevealWrapper>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center py-24">
        <div>
          <RevealWrapper>
          <div className="text-3xl md:text-6xl text-center mb-4">
            CHOOSE <span className="text-primary">YOUR PLAN</span>
          </div>

          <div className="text-xl md:text-3xl text-center mb-24">
            Belajar cara mendapatkan cuan ribuan persen di Saham
          </div>
          </RevealWrapper>

          <RevealWrapper>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="card">
              <div className="flex justify-end h-12">
                &nbsp;
              </div>

              <div className="text-primary text-5xl mt-4">PREMIUM</div>

              <div className="text-md mt-4">Learn the fundamental of stock market to get multibagger profit.</div>

              <div className="mt-4">
                <div className="text-2xl text-right">&nbsp;</div>
                <div className="text-4xl text-center">Rp 8.000.000</div>
              </div>

              <div className="mt-8 flex justify-center">
                <button className="btn-primary cursor-pointer !w-[14rem] !text-2xl">JOIN NOW</button>
              </div>

              <div className="mt-8 flex justify-center">
                <div className="w-full flex flex-col gap-4 mx-auto">
                  <div className="flex gap-4">
                    <div>&#10004;</div>
                    <div>4 days online class via Zoom</div>
                  </div>
                  <div className="flex gap-4">
                    <div>&#10004;</div>
                    <div>Live Q&A via Zoom</div>
                  </div>
                  <div className="flex gap-4">
                    <div>&#10004;</div>
                    <div>10 hours+ class</div>
                  </div>
                  <div className="flex gap-4">
                    <div>&#10004;</div>
                    <div>Access Stockwise community</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex justify-end h-12">
                <button className="btn-label">POPULAR</button>
              </div>

              <div className="text-gold text-5xl mt-4">VIP</div>

              <div className="text-md mt-4">Learn from our founder story to get the next multibagger stocks.</div>

              <div className="mt-4">
                <div className="text-2xl text-right line-through">Rp 175.000.000</div>
                <div className="text-4xl text-center">Rp 13.000.000</div>
              </div>

              <div className="mt-8 flex justify-center">
                <button className="btn-gold !w-[14rem] !text-2xl">JOIN NOW</button>
              </div>

              <div className="mt-8 flex justify-center">
                <div className="w-full flex flex-col gap-4 mx-auto">
                  <div className="flex gap-4">
                    <div>&#10004;</div>
                    <div>4 days online class via Zoom</div>
                  </div>
                  <div className="flex gap-4">
                    <div>&#10004;</div>
                    <div>Live Q&A via Zoom</div>
                  </div>
                  <div className="flex gap-4">
                    <div>&#10004;</div>
                    <div>10 hours+ class</div>
                  </div>
                  <div className="flex gap-4">
                    <div>&#10004;</div>
                    <div>Access Stockwise community</div>
                  </div>
                  <div className="flex gap-4">
                    <div>&#10004;</div>
                    <div>FREE 1 day online meet up</div>
                  </div>
                  <div className="flex gap-4">
                    <div>&#10004;</div>
                    <div>Get bonus worth of 175JT</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex justify-end h-12">
                &nbsp;
              </div>

              <div className="text-gray-400 text-5xl mt-4">UPGRADE</div>

              <div className="text-md mt-4">Upgrade your membership to VIP and get more benefits</div>

              <div className="mt-4">
                <div className="text-2xl text-right">&nbsp;</div>
                <div className="text-4xl text-center">Rp 5.000.000</div>
              </div>

              <div className="mt-8 flex justify-center">
                <button className="btn-upgrade cursor-pointer !w-[14rem] !text-2xl">UPGRADE</button>
              </div>

              <div className="mt-8 flex justify-center">
                <div className="w-full flex flex-col gap-4 mx-auto">
                  <div className="flex gap-4">
                    <div>&#10004;</div>
                    <div>4 days online class via Zoom</div>
                  </div>
                  <div className="flex gap-4">
                    <div>&#10004;</div>
                    <div>Live Q&A via Zoom</div>
                  </div>
                  <div className="flex gap-4">
                    <div>&#10004;</div>
                    <div>10 hours+ class</div>
                  </div>
                  <div className="flex gap-4">
                    <div>&#10004;</div>
                    <div>Access Stockwise community</div>
                  </div>
                  <div className="flex gap-4">
                    <div>&#10004;</div>
                    <div>FREE 1 day offline meetup</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </RevealWrapper>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center py-24">
        <div>
          <RevealWrapper>
            <div className="text-5xl md:text-6xl text-center mb-4">
              OUR <span className="text-primary">PARTNERS</span>
            </div>

            <div className="text-xl md:text-3xl text-center mb-12">
              Platform yang bekerjasama dengan kita
            </div>
          </RevealWrapper>

          <RevealWrapper>
          <div className="flex justify-center">
            <Image width={1100} height={200} src="/Partner.png" alt="partner"></Image>
          </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  );
}
