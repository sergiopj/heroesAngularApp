// import to make services
import { Injectable } from '@angular/core';
import { Heroe } from '../components/heroes/heroes.component';

// create a service with decorator
@Injectable()
export class HeroesService {

    // data from heroes
    private heroes: Heroe[] = [
        {
          nombre: 'Aquaman',
          bio: 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
          img: 'assets/img/aquaman.png',
          aparicion: '1941-11-01',
          casa: 'DC'
        },
        {
          nombre: 'Batman',
          bio: 'Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.',
          img: 'assets/img/batman.png',
          aparicion: '1939-05-01',
          casa: 'DC'
        },
        {
          nombre: 'Daredevil',
          bio: 'Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \'ver\' a través de un \'sexto sentido\' que le sirve como un radar similar al de los murciélagos.',
          img: 'assets/img/daredevil.png',
          aparicion: '1964-01-01',
          casa: 'Marvel'
        },
        {
          nombre: 'Hulk',
          bio: 'Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).',
          img: 'assets/img/hulk.png',
          aparicion: '1962-05-01',
          casa: 'Marvel'
        },
        {
          nombre: 'Linterna Verde',
          bio: 'Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)',
          img: 'assets/img/linterna-verde.png',
          aparicion: '1940-06-01',
          casa: 'DC'
        },
        {
          nombre: 'Spider-Man',
          bio: 'Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \'sentido arácnido\', que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.',
          img: 'assets/img/spiderman.png',
          aparicion: '1962-08-01',
          casa: 'Marvel'
        },
        {
          nombre: 'Wolverine',
          bio: 'En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.',
          img: 'assets/img/wolverine.png',
          aparicion: '1974-11-01',
          casa: 'Marvel'
        },
        {
            nombre: 'Capitán América',
            bio: 'Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty.',
            img: 'assets/img/captain-america.png',
            aparicion: '1941-11-01',
            casa: 'Marvel'
        },
        {
            nombre: 'Iron-Man',
            bio: 'Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.',
            img: 'assets/img/ironman.png',
            aparicion: '1963-11-01',
            casa: 'Marvel'
        },
        {
            nombre: 'The Flash',
            bio: 'Young Barry Allen’s life stopped the minute his mother was murdered. The true killer never found, its mystery obsessed Barry, driving him to become a forensic scientist. Consumed by his work, he spent his life chained to his desk, solving every case that flew across it. But when a freak lightning bolt hits a nearby shelf in his lab, Barry receives super-speed, becoming the Flash.',
            img: 'assets/img/flash.png',
            aparicion: '1940-11-01',
            casa: 'DC'
        },
        {
            nombre: 'Superman',
            bio: 'The most recognized superhero in pop culture, Superman has been elevated to mythic folkhero status. Rocketed to Earth from the dying planet Krypton, baby Kal-El was found by a farming couple who named the boy Clark Kent and raised him as their own. Discovering his enormous powers, they instilled in him strong moral values—and inspired him to become a hero.',
            img: 'assets/img/superman.png',
            aparicion: '1938-11-01',
            casa: 'DC'
        },
        {
            nombre: 'Cyclops',
            bio: 'Cyclops possesses the mutant ability to project a beam of heatless ruby-colored concussive force from his eyes, which act as inter-dimensional apertures between this universe and another. Cyclops body constantly absorbs ambient energy, such as sunlight, from his environment into his body cells that allows him to open the apertures.',
            img: 'assets/img/cyclops.png',
            aparicion: '1967-11-01',
            casa: 'Marvel'
        },
        {
            nombre: 'Shazam',
            bio: 'Unlike most foster children, Billy Batson couldn’t care less about finding a family. He just wants to turn eighteen and finally become an adult. While the boy’s compassionate and kind, he’s gotten used to protecting himself by staying emotionally distant from everybody. But that changes when he meets an ancient wizard who introduces him to one very powerful word.',
            img: 'assets/img/shazam.png',
            aparicion: '1940-11-01',
            casa: 'DC'
        },
        {
            nombre: 'Green Arrow',
            bio: 'Spoiled billionaire Oliver Queen came home with an entirely different personality—and a newfound purpose in life. Completely self-absorbed and never caring about anything but himself, Queen was on a leisurely sailing trip when his assistant betrayed him, leaving him for dead on a desolate remote island. Stranded, he survived by, amongst other things, mastering a bow and arrow.',
            img: 'assets/img/green-arrow.png',
            aparicion: '1941-11-01',
            casa: 'DC'
        },
        {
            nombre: 'Mr. Fantastic',
            bio: 'Mister Fantastic can shift his body (or portions of same) into a super-malleable state, enabling him to stretch, compress, expand, deform, elongate, contract or otherwise reshape his physical form at will. He can stretch his limbs, neck and torso to incredible lengths, though extending himself beyond approximately 1500 feet is a serious physical strain.',
            img: 'assets/img/mr-fantastic.png',
            aparicion: '1961-11-01',
            casa: 'Marvel'
        },
        {
            nombre: 'Robin',
            bio: 'And just like that, Robin the Boy Wonder made the kid sidekick an icon. Acrobat Dick Grayson was the youngest member of his parents death-defying circus act. But after their cold-blooded murder, Dick vowed revenge. Seeing a genuine piece of himself in the boy, Batman took him in—and gave him a better outlet for his anger.',
            img: 'assets/img/robin.png',
            aparicion: '1940-11-01',
            casa: 'DC'
        }
      ];

    constructor() {
        console.log('The hero service is ready');
    }

    // public method to acces data heroes
    getHeroes(): Heroe[] {
        return this.heroes;
    }





}
