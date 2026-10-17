import React from 'react';
import './ServiceSection.css';

const services = [
  {
    id: 1,
    title: 'Vacina contra gripe',
    desc: 'Na Raia você encontra vacina tetravalente contra a gripe.',
    cta: 'Consultar vacinas',
    ctaId: 'cta-vacinas',
  },
  {
    id: 2,
    title: 'Testes de COVID-19',
    desc: 'Realize seu teste com segurança e rapidez em nossas farmácias.',
    cta: 'Agende seu teste',
    ctaId: 'cta-covid',
  },
  {
    id: 3,
    title: 'Exames clínicos',
    desc: 'Exame de dengue, exame de gravidez, tireóide, entre outros.',
    cta: 'Conferir exames',
    ctaId: 'cta-exames',
  },
  {
    id: 4,
    title: 'Serviços farma',
    desc: 'Bioimpedância, pressão arterial, curativo, glicemia e mais.',
    cta: 'Conferir serviços',
    ctaId: 'cta-servicos',
  },
  {
    id: 5,
    title: 'Telessaúde',
    desc: 'Consultas virtuais, diagnósticos à distância e acompanhamento.',
    cta: 'Agendar consulta',
    ctaId: 'cta-telessaude',
  },
];

const ServiceSection: React.FC = () => {
  return (
    <section className="service-section" id="service-section">
      <div className="service-grid">
        {services.map(s => (
          <div key={s.id} className="service-card" id={`service-card-${s.id}`}>
            <h3 className="service-card__title">{s.title}</h3>
            <p className="service-card__desc">{s.desc}</p>
            <button className="service-card__btn" id={s.ctaId}>
              {s.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
