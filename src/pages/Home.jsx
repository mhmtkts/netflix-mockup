/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { userSuggestionsData } from "../userSuggestion";
import Suggestion from "../components/Suggestion/Suggestion";
import Hero from "../components/Hero/Hero";
import { Helmet } from "react-helmet";

export default function Home(props) {
  const [suggestions, setSuggestion] = useState([]);
  const { activeProfile } = props;

   // activeProfile değiştiğinde çalışacak useEffect kancasını tanımlıyoruz
  useEffect(() => {
    const suggestionData = userSuggestionsData[activeProfile.id];
    setSuggestion(suggestionData);
  }, [activeProfile]);

  return (
    <>
      <Helmet>
        <title>WitFlix</title>
      </Helmet>
      <Hero activeProfile={activeProfile} />
      {suggestions.map((suggestion, index) => {
        return <Suggestion key={index} suggestion={suggestion} />;
      })}
    </>
  );
}
