import { Separator } from "@radix-ui/react-separator";

export default function Band() {
  return (
    <div className="lg:max-w-[80%]  sm:max-w-[90%] mx-auto border border-foreground p-4  min-h-[500px] sm:rounded bg-white shadow-lg">
      <div>
        <h2 className="text-center text-xl font-bold div-from-top">
          Le groupe
        </h2>
      </div>
      <Separator className="h-[1px] w-[80%] my-2 mx-auto bg-foreground div-from-left" />
      <p className=" mb-2 sm:p-4 max-w-[1200px] mx-auto">
        Composé de <b>4 musiciens </b>de longue date, <b>Los Barqueros</b>,
        c'est avant tout une passion partagée pour{" "}
        <b>le Son et la musique cubaine</b> ! Une contrebasse chaloupée, un
        montuno au piano, une mélodie au saxophone ou à l'accordéon, une rumba
        au congas et un chant suave de <b>Buena vista social club</b> à{" "}
        <b>Pink Martini</b> en passant par des grands standards de jazz.
        <br />
      </p>
      <div className=" flex justify-center"></div>
    </div>
  );
}
