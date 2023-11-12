import React, { FunctionComponent } from "react";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";
//components
import { Layout } from "../components/layout";
import { SeoHeader } from "../components/seoHeader";

//functions
import { getPosts, getRandomPosts } from "../localFunctions/importPosts";
//typescript
import { FullPost } from "../typescript";
//variables
import {
  AMOUNT_OF_POST_FRONTPAGE,
  AMOUNT_OF_RANDOM_POST_FRONTPAGE,
} from "../public/variables";

const Container = styled.div`
  & > p {
    & > img {
      width: 100%;
      max-width: 42rem;
      margin: 2em auto;
    }
  }
`;

type HomeProps = {
  latestPosts: FullPost[];
  randomPosts: FullPost[];
};

const Home: FunctionComponent<HomeProps> = () => {
  const a = `<div class="in ng-binding ng-scope editable" e-form="hoverFormP" editable-textarea="generator.placeholders" e-rows="15" oncancel="generator.removePlaceholders()" onshow="generator.whenShow()" onhide="generator.whenHide()" blur="ignore" ng-bind-html="generator.placeholders | to_trusted"><h2><strong>Privacy Policy</strong></h2><p><strong>Privacy policy</strong>&nbsp;voor sciencegeek, eigenaar van sciengeek.nl</p><p><strong>1) Waarborgen Privacy</strong></p><p>Het waarborgen van de privacy van bezoekers van sciengeek.nl is een belangrijke taak voor ons. Daarom beschrijven we in onze privacy policy welke informatie we verzamelen en hoe we deze informatie gebruiken.</p><p><strong>2) Toestemming</strong></p><p>Door de informatie en de diensten op sciengeek.nl te gebruiken, gaat u akkoord met onze privacy policy en de voorwaarden die wij hierin hebben opgenomen.</p><p><strong>3) Vragen</strong></p><p>Als u meer informatie wilt ontvangen, of vragen hebt over de privacy policy van&nbsp; sciencegeek en specifiek sciengeek.nl, kun u ons benaderen via e-mail. Ons e-mailadres is&nbsp;redactie@sciencegeek.nl.</p><p><strong>4) Monitoren gedrag</strong>&nbsp;bezoeker</p><p>sciengeek.nl&nbsp;maakt gebruik van verschillende technieken om bij te houden wie de&nbsp;website <a href="https://www.ironlinkdirectory.com/" target="_blank">link</a> bezoekt, hoe deze bezoeker zich op de website gedraagt en welke pagina’s worden bezocht. Dat is een gebruikelijke manier van werken voor websites omdat het informatie oplevert op die bijdraagt aan de kwaliteit van de gebruikerservaring. De informatie die we, via cookies, registreren, bestaat uit onder meer IP-adressen, het type browser en de bezochte pagina’s.</p><p>Tevens monitoren we waar bezoekers de website voor het eerst bezoeken en vanaf welke pagina ze vertrekken. Deze informatie houden we anoniem bij en is niet gekoppeld aan andere persoonlijke informatie.</p><p><strong>5) Gebruik van cookies</strong></p><p>sciengeek.nl plaatst cookies bij bezoekers. Dat doen we om informatie te verzamelen over de pagina’s die gebruikers op onze website bezoeken, om bij te houden hoe vaak bezoekers terug komen en om te zien welke pagina’s het goed doen op de website. Ook houden we bij welke informatie de browser deelt.</p><p><strong>6) Cookies uitschakelen</strong></p><p>U kunt er voor kiezen om cookies uit te schakelen. Dat doet u door gebruik te maken de mogelijkheden van uw browser. U vindt meer informatie over deze mogelijkheden op de website van de aanbieder van uw browser.</p><p></p><p><strong>7) Cookies van derde partijen</strong></p><p>Het is mogelijk dat derde partijen, zoals Google, op onze website adverteren of dat wij gebruik maken van een andere dienst. Daarvoor plaatsen deze derde partijen in sommige gevallen cookies. Deze cookies zijn niet door sciengeek.nl te beïnvloeden.</p><p></p><p></p><p><strong>8)</strong> <strong>Onze adverteerders</strong></p><p>Op sciengeek.nl adverteren meerdere partijen, die allemaal hun eigen cookies plaatsen.</p><p>Deze adverteerders gebruiken technologie voor hun advertenties en de links in hun advertenties die direct door uw browser worden herkend. Ze gebruiken onder meer automatische herkenning van IP-adressen die rechtstreeks naar de adverteerder wordt gestuurd.</p><p>Daarnaast worden cookies, javascript en eventueel webbeacons ingezet om te monitoren hoe effectief de campagnes van deze partijen zijn. sciengeek.nl heeft noch invloed noch controle over de cookies, het javascript en de webbeacons die onze adverteerders gebruiken.</p><p>Al deze partijen hebben een eigen privacy policy en hanteren deze privacy policy voor het gebruik van hun website en de daaraan gekoppelde diensten. Meer informatie over hoe deze partijen omgaan met privacy vindt u op de websites van deze partije</p><p></p><p></p><p><strong>9) Privacy policy van adverteerders/derde partijen</strong></p><p>Voor meer informatie over de privacy policy van onze adverteerders en derde partijen die verbonden zijn aan deze website, kun u terecht op de websites van deze respectievelijke partijen. sciengeek.nl kan geen invloed uitoefenen op deze cookies en de privacy policy van door derden geplaatste cookies. Deze cookies vallen buiten het bereik van de privacy policy van sciengeek.nl.</p><p></p><p></p><p></p><p></p><p></p></div>`;

  return (
    <Layout>
      <SeoHeader subtitle="ScienceGeek brengt internationaal en binnenlands wetenschappelijk nieuws." />
      <main>
        <div className="md:grid md:mt-10">
          <Container className="prose-xl md:prose-2xl mx-auto">
            {ReactHtmlParser(a)}
          </Container>
        </div>
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const latestPosts = await getPosts(AMOUNT_OF_POST_FRONTPAGE);
  const randomPosts = await getRandomPosts(AMOUNT_OF_RANDOM_POST_FRONTPAGE);
  return { props: { latestPosts, randomPosts } };
}

export default Home;
