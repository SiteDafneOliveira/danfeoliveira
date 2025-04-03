import s from "./mappingMethod.module.scss";

const MappingMethod = () => {
  return (
    <div className={`${s.institute} container`}>
      <div>
        <h2 className={s.title}>MÉTODO DE MAPEAMENTO DO SEU BIOTOPO</h2>
        <p className={s.content}>
          Utilizo um método exclusivo de mapeamento de biotipo, que une ciência
          e personalização para montar estratégias altamente eficazes. A partir
          da análise de sintomas, exames laboratoriais, testes genéticos,
          avaliação da composição corporal, junto com conhecimento em genética,
          medicina chinesa, ayurveda, homotoxicologia e nutrição funcional
          integrativa, construo planos nutricionais completos e realistas — com
          alimentação, suplementação e estilo de vida alinhados ao seu
          metabolismo, sua rotina e seus objetivos.
        </p>
      </div>
    </div>
  );
};

export default MappingMethod;
