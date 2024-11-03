// import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const Index = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);
  // const t = useTranslations('Index');

  return (
    <>
      <p>
        Projeto de vídeo com tradução em tempo real
      </p>
      <p>
        Faça o login ou se inscreva para começar
      </p>
      <h2 className="mt-5 text-2xl font-bold">
        Video-hub
      </h2>
      <p>
        A ideia deste projeto é possibilitar a comunicação entre pessoas de idiomas distintos através de legendas e traduções,
        o que auxilia no aprendizado por tornar a conversação algo mais acessível.
      </p>
    </>
  );
};

export default Index;
