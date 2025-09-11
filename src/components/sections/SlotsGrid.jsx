import Image from "next/image";

export default function SlotsGrid({ slots = [], title }) {
  return (
    <section className="slots-section">
      <h2 className="section__title">{title}</h2>
      <div className="slots__list">
        {slots.map((slot) => (
          <div key={slot.id} className="slots__item">
            <div className="slots__image-container">
              <Image
                src={slot.imageUrl}
                alt={slot.name}
                width={300}
                height={200}
                className="slots__img"
                loading="lazy"
              />
            </div>
            <h3 className="slots__name">{slot.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
