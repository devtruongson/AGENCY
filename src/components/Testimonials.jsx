import { useTranslation } from 'react-i18next'

export default function Testimonials() {
  const { t } = useTranslation()

  const allReviews = t('testimonials.reviews', { returnObjects: true })
  
  // Split reviews into 2 rows
  const row1 = allReviews.slice(0, 3)
  const row2 = allReviews.slice(3, 6)

  const TestimonialCard = ({ testimonial }) => (
    <div className="flex-shrink-0 w-[400px] mx-4">
      <div className="bg-background-dark p-8 rounded-[2rem] border border-border-dark hover:border-primary/50 transition-all h-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary-blue flex items-center justify-center text-white font-black text-xl">
              {testimonial.name.charAt(0)}
            </div>
            {testimonial.verified && (
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-xs fill-1">
                  verified
                </span>
              </div>
            )}
          </div>
          <div className="flex-1">
            <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
            <p className="text-secondary-blue text-sm font-medium">
              {testimonial.role}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`material-symbols-outlined text-xl ${
                i < testimonial.rating ? 'text-primary fill-1' : 'text-border-dark'
              }`}
            >
              star
            </span>
          ))}
        </div>
        
        <p className="text-text-secondary leading-relaxed">
          "{testimonial.text}"
        </p>
      </div>
    </div>
  )

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-surface-dark/20 overflow-hidden" id="testimonials">
      <div className="max-w-[1440px] mx-auto mb-20">
        <div className="text-center">
          <span className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block">
            {t('testimonials.badge')}
          </span>
          <h2 className="text-white text-4xl md:text-6xl font-black mb-8 leading-tight">
            {t('testimonials.title')}
          </h2>
          <p className="text-text-secondary text-xl max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>
      </div>

      {/* Row 1 - Scroll Left to Right */}
      <div className="relative mb-8">
        <div className="flex animate-scroll-left">
          {/* Original cards */}
          {row1.map((testimonial, index) => (
            <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
          ))}
          {/* Duplicate for infinite scroll */}
          {row1.map((testimonial, index) => (
            <TestimonialCard key={`row1-dup-${index}`} testimonial={testimonial} />
          ))}
          {/* Triple for seamless loop */}
          {row1.map((testimonial, index) => (
            <TestimonialCard key={`row1-dup2-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Row 2 - Scroll Right to Left */}
      <div className="relative">
        <div className="flex animate-scroll-right">
          {/* Original cards */}
          {row2.map((testimonial, index) => (
            <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
          ))}
          {/* Duplicate for infinite scroll */}
          {row2.map((testimonial, index) => (
            <TestimonialCard key={`row2-dup-${index}`} testimonial={testimonial} />
          ))}
          {/* Triple for seamless loop */}
          {row2.map((testimonial, index) => (
            <TestimonialCard key={`row2-dup2-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
