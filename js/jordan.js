let JSON_CUENTO = {
    nombre:"Jordan y sus dos lenguas",
    tipo:"Cuentos sobre respeto y diversidad",
    descripcion:"Jordan vive en Chile hace pocos meses, su familia es de Haití. Para él todos los días son un viaje lleno de nuevas palabras, sonidos y costumbres. Un viaje que pasa por dos lenguas: la que se habla en la casa, que es la del calor, de los frutos enormes, del pescado salado y del sonido de los tambores; y la otra, que se habla en la calle y en la escuela, y que es la lengua del país frío que se come las letras, de las voces que sesean como culebras. Te invitamos a acompañar a Jordan en este viaje, y a ayudarlo a decidir qué recorrido tomar.",
    creditos:[
                ["Adaptación:","Pablo Corro Pemjean"],
                ["Ilustraciones:","Copec"],
                ["Narración:","Constanza Ried Silva"],
                ["Arreglos musicales:","Copec y Entrelíneas"],
                ["Edición a cargo de:","Constanza Ried Silva<br>Verónica Vives Cofré<br>Fundación Entrelíneas"],
                ["Montaje y desarrollo web:","Agencia Match"],
                ["Créditos de sonidos:","Revise detalles <a href='#' target='_blank'>aquí</a>"] 
    ],
    ID:0, 
    imagenes:[
        "img/jordan/esc_0_fondo.jpg",
        "img/jordan/esc_1_fondo.jpg",
        "img/jordan/esc_2_fondo.jpg",
        "img/jordan/esc_3_fondo.jpg",
        "img/jordan/esc_4_fondo.jpg",
        "img/jordan/esc_5_fondo.jpg",
        "img/jordan/esc_6_fondo.jpg",
        "img/jordan/esc_7_fondo.jpg",
        "img/jordan/esc_8_fondo.jpg",
        "img/jordan/esc_9_fondo.jpg",
        "img/jordan/esc_10_fondo.jpg",
        "img/jordan/esc_11_fondo.jpg",
        "img/jordan/sprite/shake.png",

    ], 
    fx_sonido:[
        {nombre:"guitarra_alegre", url:"audio/jordan/fx/guitarra_alegre.mp3"},
        {nombre:"organi", url:"audio/jordan/fx/organi.mp3" },
        {nombre:"aleteo", url: "audio/jordan/fx/Aleteo_tiburon.mp3" },
        {nombre:"nino", url: "audio/jordan/fx/nino_durmiendo.mp3" },
        {nombre:"ratones", url: "audio/jordan/fx/Ratones.mp3" },
        {nombre:"gatos", url: "audio/jordan/fx/Gatitos.mp3" },
        {nombre:"mercado", url: "audio/jordan/fx/Mercado.mp3" },
        {nombre:"peatones", url: "audio/jordan/fx/Peatones.mp3" },
        {nombre:"gato_sonriente", url:"audio/jordan/fx/Gato_sonriente.mp3" },
        {nombre:"metro", url: "audio/jordan/fx/Metro.mp3" },
        {nombre:"splash", url: "audio/jordan/fx/Splash.mp3" },
        {nombre:"pasa_bus", url: "audio/jordan/fx/pasa_bus.mp3" },
        {nombre:"plaza", url: "audio/jordan/fx/plaza.mp3" },
        {nombre:"circo", url: "audio/jordan/fx/circo.mp3" },
        {nombre:"loro", url: "audio/jordan/fx/loro_plaza.mp3" },
        {nombre:"moneda",url:"audio/jordan/fx/moneda.mp3"},
        
    ], 
    n_escena:0, 
    escenas: 
    [
        {
            nombre:"Escena 1",
            miniatura:"img/jordan/mini_0.jpg",
            audio:"audio/jordan/escena_01.mp3",
            parrafos:
            [
                {
                    texto: "Cuando su padre lo despierta, Jordan está soñando con una isla: el lugar de donde viene su familia.",
                    tiempo:[0,8.0,13] 
                },
                {
                    texto: "En su sueño, un tiburón sonríe mostrando los dientes,",
                    tiempo:[8.5,13.5,0.5] 
                },
                {
                    texto: "y no se cansa de dar vueltas alrededor de las montañas, las selvas y las playas de la isla.",
                    tiempo:[14,21.5,0.5] 
                },
                {
                    texto: "El tiburón es el cuidador de Haití.",
                    tiempo:[22,25.2,0.5] 
                },
                
            ]
        },
        {
            nombre:"Escena 2",
            miniatura:"img/jordan/mini_1.jpg",
            audio:"audio/jordan/escena_02.mp3",
            parrafos:
            [
                {
                    texto: "Jean, su papá, trabaja en una bodega de papas en la Vega.",
                    tiempo:[0,4.7,0.5] 
                },
                {
                    texto: "Jordan lo acompaña los sábados y domingos.",
                    tiempo:[5.2,8.8,0.5] 
                },
                {
                    texto: "Le gusta subirse a las montañas de sacos de papas.",
                    tiempo:[9.3,12.8,0.5] 
                },
                {
                    texto: "Desde arriba ve a los cargadores como hormiguitas llevando los pesados sacos.",
                    tiempo:[13.3,19.8,0.5] 
                },
                {
                    texto: "Don Vicho y Don Rola le gritan desde abajo que sonría porque no lo ven en la oscuridad.",
                    tiempo:[20.3,26.7,0.5] 
                },
                {
                    texto: "Él se deja ver mostrando los dientes.",
                    tiempo:[27.2,30.8,0.5] 
                },
                
            ]
        },
        {
            nombre:"Escena 3",
            miniatura:"img/jordan/mini_2.jpg",
            audio:"audio/jordan/escena_03.mp3",
            parrafos:
            [
                {
                    texto: "Don Vicho y Don Rola son sus amigos.",
                    tiempo:[0,3.1,0.5] 
                },
                {
                    texto: "Jordan les enseña palabras en creole, la lengua de Haití.",
                    tiempo:[3.6,8.4,0.5] 
                },
                {
                    texto: "Papa frita se dice “Pòmdetè Fri”, les cuenta Jordan.",
                    tiempo:[8.9,13.9,0.5] 
                },
                {
                    texto: "Se ríe a carcajadas cuando Don Vicho y Don Rola tratan de pronunciar las palabras en la lengua de su isla.",
                    tiempo:[14.4,23.3,0.5] 
                },
                {
                    texto: "“Ya, cabro, déjate de revolverla”, le contesta Don Vicho.",
                    tiempo:[23.8,28.4,0.4] 
                },
                
            ]
        },
        {
            nombre:"Escena 4",
            miniatura:"img/jordan/mini_3.jpg",
            audio:"audio/jordan/escena_04.mp3",
            parrafos:
            [
                {
                    texto: "De regreso a casa, Jordan y su padre pasan frente a los puestos de fruta y verdura:",
                    tiempo:[0,7.1,0.5] 
                },
                {
                    texto: "montones de sandías y melones, uva negra, frutillas, duraznos, damascos.",
                    tiempo:[7.5,15,0.5] 
                },
                {
                    texto: "Tomados de la mano, se abren camino entre un mar de gente.",
                    tiempo:[15.4,20.6,0.5] 
                },
                
                {
                    texto: "Pueden sentir los gritos de los vendedores y el aroma de la albahaca fresca.",
                    tiempo:[21.4,27.2,0.4] 
                },
                
                
                
            ]
        },
        {
            nombre:"Escena 5",
            miniatura:"img/jordan/mini_4.jpg",
            audio:"audio/jordan/escena_05.mp3",
            parrafos:
            [
                {
                    texto: "Su padre se detiene y le pregunta si está cansado;<br>si prefiere caminar al metro o tomar la micro.",
                    tiempo:[0,7,9] 
                },
                {
                    texto: "Jordan duda: la caminata es larga, pero pasan por el parque de los juegos que a él le gustan tanto.",
                    tiempo:[7.8,15.3,0.5] 
                },
                {
                    texto: "Por otro lado, quiere encontrarse con su amigo Carlos que toca tan bien<br>la guitarra en su recorrido de la micro.",
                    tiempo:[15.7,23.2,0.5] 
                },
                
                {
                    texto: "“¿Jordan, qué prefieres hacer?” - le insiste su padre.",
                    tiempo:[23.6,26.8,0.5] 
                },
                
                
            ]
        },
        {
            nombre:"Escena 6",
            miniatura:"img/jordan/mini_5.jpg",
            audio:"audio/jordan/escena_06.mp3",
            parrafos:
            [
                {
                    texto: "Cruzan el río Mapocho.",
                    tiempo:[0,1.8,0.5] 
                },
                {
                    texto: "En el parque, Jordan escucha música que viene de un carrito lleno de colores y juguetes.",
                    tiempo:[2.6,10.1,0.5] 
                },
                {
                    texto: "Su papá le dice que es un organillero y le compra dos remolinos:",
                    tiempo:[10.5,16,0.5]    
                },
                {
                    texto: "uno para él y otro para Cendrine, su hermana pequeña.",
                    tiempo:[16.4,20.7,0.5]    
                },
                {
                    texto: "Su papá sabe casi todo de Chile.",
                    tiempo:[21.1,23.7,0.5]    
                },
                {
                    texto: "Vive en Santiago hace años; mientras que él, su mamá y Cendrine,<br>solo llegaron hace algunos meses.",
                    tiempo:[24.1,32.4,0.5]    
                },
                
            ]
        },
        {
            nombre:"Escena 7",
            miniatura:"img/jordan/mini_6.jpg",
            audio:"audio/jordan/escena_07.mp3",
            parrafos:
            [
                {
                    texto: "Dos niños juegan en el vagón del metro.",
                    tiempo:[0,2.7,0.5] 
                },
                {
                    texto: "Mientras los mira, recuerda que en la escuela leyeron un<br>libro de una niña que se perdía en un mundo de locos,",
                    tiempo:[3.1,10.5,0.5] 
                },
                {
                    texto: "y de un señor que servía té en un sombrero.",
                    tiempo:[11,14.5,0.5] 
                },
                {
                    texto: "Pero lo que más le gusta es el gato que desaparece y sólo muestra su sonrisa.",
                    tiempo:[14.9,21.9,0.5] 
                },
                {
                    texto: "“En la oscuridad soy como ese gato”, piensa Jordan.",
                    tiempo:[22.3,26.5,0.4] 
                },
                
            ]
        },
        {
            nombre:"Escena 8",
            miniatura:"img/jordan/mini_7.jpg",
            audio:"audio/jordan/escena_08.mp3",
            parrafos:
            [
                {
                    texto: "Despierta sobresaltado de su sueño cuando papá le avisa que les toca bajar.",
                    tiempo:[0,4.9,0.5] 
                },
                {
                    texto: "Mientras caminan a casa cuenta a su papá que sus amigos del colegio se ríen como locos",
                    tiempo:[5.3,12.1,0.4] 
                },
                {
                    texto: "cuando les cuenta del nombre del ave nacional de la isla, el “Kanson wouj”.",
                    tiempo:[12.45,17.6,0.5] 
                },
                {
                    texto: "¡Calzón, calzón! -le gritan para molestarlo.",
                    tiempo:[18.0,21.6,0.4] 
                },
                
            ]
        },
        {
            nombre:"Escena 9",
            miniatura:"img/jordan/mini_8.jpg",
            audio:"audio/jordan/escena_09.mp3",
            parrafos:
            [
                {
                    texto: "La micro está llena de gente que dice cosas<br>que Jordan no alcanza a comprender.",
                    tiempo:[0,6.3,0.5] 
                },
                {
                    texto: "Cada día aprende una palabra nueva.",
                    tiempo:[6.7,9.6,0.5] 
                },
                {
                    texto: "Su preferida de esta semana es tiburón, aunque le cuesta porque se le enreda la R: “Tibu-gggrrrrón”.",
                    tiempo:[10,19.7,0.5] 
                },
                {
                    texto: "En su lengua se dice “Reken”.",
                    tiempo:[20.1,22.8,0.5] 
                },
                {
                    texto: "A veces, al terminar el día, resuenan en su cabeza sonidos y ecos<br>de tantas palabras nuevas que no puede dormir.",
                    tiempo:[23.2,33.4,0.5] 
                },
                
            ]
        },
            {
                nombre:"Escena 10",
                miniatura:"img/jordan/mini_9.jpg",
                audio:"audio/jordan/escena_10.mp3",
                parrafos:
                [
                    {
                        texto: "Jordan salta a la vereda, y grita “¡Mèsi anpil!” al conductor del bus.",
                        tiempo:[0,5.9,0.5] 
                    },
                    {
                        texto: "Cuando se percata de su confusión, se esconde tras su padre.",
                        tiempo:[6.3,10.6,0.5] 
                    },
                    {
                        texto: "No es fácil hablar dos lenguas. Una, en la casa:",
                        tiempo:[11,14.8,0.5] 
                    },
                    {
                        texto: "la de la isla, del Reken, del calor, de los frutos enormes, el pescado salado y el sonido de tambores.",
                        tiempo:[15.2,24.2,0.5] 
                    },
                    {
                        texto: "La otra, en la calle y en la escuela:",
                        tiempo:[25.0,28,0.5] 
                    },
                    {
                        texto: "la lengua del país frío que se come las letras, de las voces que sesean como culebras.",
                        tiempo:[28.4,35.2,0.5] 
                    },
                    
                ]
            },
            {
                nombre:"Escena 11",
                miniatura:"img/jordan/mini_10.jpg",
                audio:"audio/jordan/escena_11.mp3",
                parrafos:
                [
                    {
                        texto: "Jordan está cansado, hambriento y quiere ver a mamá;",
                        tiempo:[0,5.0,0.5] 
                    },
                    {
                        texto: "pero sus piernas ya no le responden.",
                        tiempo:[5.4,7.9,0.5] 
                    },
                    {
                        texto: "Jean lo sube a sus hombros y avanza a grandes zancadas.",
                        tiempo:[8.3,13.2,0.5] 
                    },
                    {
                        texto: "De pronto grita, “¡Gade, papá!”, y se descuelga rápidamente de sus hombros al suelo.",
                        tiempo:[13.6,20.8,0.5] 
                    },
                    {
                        texto: "Ha visto algo que brilla junto a un árbol.",
                        tiempo:[21.2,24.8,0.5] 
                    },
                    {
                        texto: "¡Qué suerte, es una moneda! Jordan se siente feliz.",
                        tiempo:[25.2,29.8,0.5] 
                    },
                    
                ]
            },
            {
                nombre:"Escena 12",
                miniatura:"img/jordan/mini_11.jpg",
                audio:"audio/jordan/escena_12.mp3",
                parrafos:
                [
                    {
                        texto: "Al día siguiente, Jordan habla en creole con su compañero Baptiste",
                        tiempo:[0,5.0,0.5] 
                    },
                    {
                        texto: "y el profesor los interrumpe: “¡Niños, paren de hablar cabezas de pescado!”",
                        tiempo:[5.4,10.9,0.5] 
                    },
                    {
                        texto: "Cuando dice eso, Jordan ve a su profesor y a todo su curso con cabezas de pescado:",
                        tiempo:[11.3,18.4,0.5] 
                    },
                    {
                        texto: "plateadas, azules, rojas, todas brillantes de agua, abriendo y cerrando la boca.",
                        tiempo:[18.8,26.1,0.5] 
                    },
                    {
                        texto: "Jordan se traga su risa y vuelve al español:",
                        tiempo:[26.5,30.3,0.5] 
                    },
                    {
                        texto: "la lengua de la calle, de la escuela y del país frío.",
                        tiempo:[30.7,35.2,0.5] 
                    },
                    
                ]
            },
        
    ]    
};

let ANIM = {
    /* ↓↓↓↓↓ HOLA CATA - COPIA DESDE LA LÍNEA SIGUIENTE ↓↓↓↓↓ */
    main_tl: undefined,
    creapartes: () => {
        // PONER ACÁ LO QUE SE VAYA A CREAR "ON THE FLY"
    },
    fadeVolume: (cual, desde = 1, hasta = 0.2, t = 1) => {
        let o = { vol: desde };
        let fade = new TimelineMax({
            onUpdate: function () {
                Player.cambiaVolume(cual, o.vol);
            }
        });
        
        fade.to(o, t, { vol: hasta });
        fade.play();
    },
    arrWaitSounds: [],
    waitForSound: (cual, waitFor = 4, cuantoDura = 14, cuantasVeces = 1, cuantoDejoAlFinal = 0, volume = 1, fade = false, fadeFrom = 12, volFadeTo = 0) => {
        
        if (!ANIM[`wait_sound_${cual}`]) {
            ANIM[`wait_sound_${cual}`] = new TimelineMax({ repeat: cuantasVeces - 1 });
            
            let o = { val: 0 };
            let waitTL = `+=${waitFor}`;
            ANIM[`wait_sound_${cual}`]

                .addLabel('inicio')
                .addCallback(function () {
                    Player.playSoundFX(cual);
                    Player.cambiaVolume(cual, volume);
                }, waitTL)
                .to(o, cuantoDura + cuantoDejoAlFinal, { val: 100 })
                .addLabel('final')
                ;
            
            //            ANIM[`wait_sound_${cual}`].add(TweenMax.to(o, cuantoDura+cuantoDejoAlFinal,{val:100}),waitFor);   
            
            if (fade) {
                ANIM[`wait_sound_${cual}`].addCallback(function () {
                    ANIM.fadeVolume(cual, volume, volFadeTo, cuantoDura - fadeFrom);
                }, waitFor + fadeFrom);
            }
            
            ANIM.arrWaitSounds.push(ANIM[`wait_sound_${cual}`]);
        }
        ANIM[`wait_sound_${cual}`].play(0);
    },
    pauseWaitSound: () => {
        ANIM.arrWaitSounds.map((item, i) => {
            item.pause();
        });
    },

    animaescena_4: () => {
        if (!ANIM.anim_interact_4_palomap1) {
            ANIM.anim_interact_4_palomap1 = new TimelineMax({ repeat: -1 }); // creo la interacción
            ANIM.anim_interact_4_palomap1
        
           .addLabel('inicio')
           .fromTo('#escena_04 .palomap1', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
           .addLabel('final');
       }
        ANIM.anim_interact_4_palomap1.resume();

        if (!ANIM.anim_interact_4_palomap2) {
            ANIM.anim_interact_4_palomap2 = new TimelineMax({ repeat: -1 }); // creo la interacción
            ANIM.anim_interact_4_palomap2
        
           .addLabel('inicio')
           .fromTo('#escena_04 .palomap2', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
           .addLabel('final');
       }
           ANIM.anim_interact_4_palomap2.resume();
    },

    pauseAnimaciones: () => {
        
        try { ANIM.anim_interact_4_palomap1.pause(0) }
        catch (err) { }
        
        try { ANIM.anim_interact_4_palomap2.pause(0) }
        catch (err) {}
    },

    
    

    activaJordanOpciones:() => {
        $('#overlayDark').css({'display':'block'});
        $('#jordanOpciones').css({'display':'block'});
        TweenMax.fromTo('#jordanOpciones',1, {alpha:0}, {alpha:1});
    },
    desActivaJordanOpciones:() => {
        $('#overlayDark').css({'display':'none'});
        $('#jordanOpciones').css({'display':'none'});
    },


    init: () => {
        ANIM.creapartes();

        
        //$('#escenario #escena_04').css({'display':'none'});
        $('#jordanButtonRed').click(function(){
            Player.setScene(5, "Escena 5");
        });
    
        $('#jordanButtonBlue').click(function(){
            Player.setScene(8, "Escena 9");
        });

       
          
        Player.creaMainTL();
        /***/
         
        // Acá van ejemplos de animaciones y labels adicionales de la animación principal || Desde acá hacia abajo deberás editar lo tuyo
        /*
        ANIM.main_tl.addLabel('0_0_audio','escena_0+=0.01'); // <-- Agregar labels adicionales, tomando como referencia otra label y sumándole o restándole la cantidad de tiempo en que quiero que se active
        ANIM.main_tl.addLabel('princesas_ventana','1_4+=0.3'); // <-- otro ejemplo de lo mismo los labels pueden ser cualquier cosa
        ANIM.main_tl.add( TweenMax.to('#escena_00', 20, {scale:2}),'escena_0+=13'); // <-- le pongo una animación al timeline con la misma técnica, es decir uso una label existente y le sumo o resto el tiempo en que quiero que se active a partir de ésta.
        */
        ANIM.main_tl.addLabel('0_0_audio', 'escena_0+=0.1');
        ANIM.main_tl.addLabel('0_0_audio_fade', '0_0-=2');
        ANIM.main_tl.addCallback(function () {
            Player.playSoundFX('guitarra_alegre');
        }, '0_0_audio');
        ANIM.main_tl.addCallback(function () {
            ANIM.fadeVolume('guitarra_alegre',1,0,2);
        }, "0_0_audio_fade");
        

        ANIM.main_tl.addLabel('4_0_audio', 'escena_4+=0.02');
        ANIM.main_tl.addLabel('4_0_audio_fade', '4_0-=2');
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('peatones');
        }, "4_0_audio"); 
        ANIM.main_tl.addCallback(function () {
            ANIM.fadeVolume('peatones',1,0,2);
        }, "4_0_audio_fade");


        /*INICIO*/
        /*LLAMADAS Y FUNCIONES ESCENA 0*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function () {
            Player.hideOthersBut('escena_00');
            Player.desActivaJordanOpciones();
        }, "escena_0"); // esto quiere decir que cuando main_tl llegue a la label "escena_0" va a llamar a Player.hideOthersBut('escena_00');
     
        ANIM.main_tl.addCallback(function () {
            Player.activaBtnSiguiente(); // <-- no vá siempre, depende del cuento (a veces sólo se activa cuando terminas la interactividad)
            ANIM.main_tl.pause(); // <-- va siempre, pausa el timeline al llegar al label específicado, en este caso "fin_escena_0"
            ANIM.interactividad(0); // <-- Activa la interactividad. No va siempre, depende del cuento. A veces va más de uno y/o con parámetros adicionales 
            Player.tooglePlayPauseIco(); // <-- va siempre, intercambia el ícono de play/pause en el reproductor
            Player.resetSubtitulos();
            Player.playSoundFX('nino');
            Player.cambiaVolume('nino',0.2);
            //ANIM.fadeVolume('aleteo',1,0.2,3);
           //Player.playSoundFX('guitarra_alegre', true) <-- va siempre, evita que los subtítulos se queden pegados al finalizar la escena
            // puedes poner cualquier cosa en realidad. A veces hay que poner sonidos apenas termina la escena, entonces pones la línea siguiente:
            // Player.playSoundFX('magia'); // tiene que existir en el archivo de configuración en el array fx_sonido, accedes a él por el nombre que le pusiste, este caso 'magia'
        }, "fin_escena_0"); /* esto quiere decir que cuando main_tl llegue a la label "fin_escena_0" va a llamar a 
                                                                                                Player.activaBtnSiguiente();
                                                                                                ANIM.main_tl.pause();
                                                                                                ANIM.interactividad(0);
                                                                                                Player.tooglePlayPauseIco();
                                                                                                Player.resetSubtitulos();
                                                                                                
       
        /*LLAMADAS Y FUNCIONES ESCENA 1*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function () {
            Player.hideOthersBut('escena_01');
            //Player.desActivaJordanOpciones();
            ANIM.desActivaJordanOpciones();
        }, "escena_1");

        ANIM.main_tl.addCallback(function () {
            ANIM.main_tl.pause();
            Player.activaBtnSiguiente();
            ANIM.interactividad(1);
            //            ANIM.interactividad(1,undefined,'secundario');
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        }, "fin_escena_1");
        
        /*LLAMADAS Y FUNCIONES ESCENA 2*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function () {
            Player.hideOthersBut('escena_02');
            //Player.desActivaJordanOpciones();
            ANIM.desActivaJordanOpciones();
        }, "escena_2");
        
        ANIM.main_tl.addCallback(function () {
            ANIM.main_tl.pause();
            ANIM.interactividad(2);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        }, "fin_escena_2");
        
       
        /*LLAMADAS Y FUNCIONES ESCENA 3*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function () {
            Player.hideOthersBut('escena_03');
            //Player.desActivaJordanOpciones();
            ANIM.desActivaJordanOpciones();
        }, "escena_3");
      
        ANIM.main_tl.addCallback(function () {
            ANIM.main_tl.pause();
            ANIM.interactividad(3);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('mercado');
            Player.cambiaVolume('mercado',0.2);
        }, "fin_escena_3");
        
        
        /*LLAMADAS Y FUNCIONES ESCENA 4*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function () {
            ANIM.animaescena_4();
            Player.hideOthersBut('escena_04');
            //Player.desActivaJordanOpciones();
            ANIM.desActivaJordanOpciones();
        }, "escena_4");

        ANIM.main_tl.addCallback(function () {
            ANIM.animaescena_4();
            ANIM.main_tl.pause();
            //Player.activaJordanOpciones();
            ANIM.activaJordanOpciones();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('peatones');
            Player.cambiaVolume('peatones', 0.2);
            console.log("fin_escena 4");
        }, "fin_escena_4");
        
        
        /*LLAMADAS Y FUNCIONES ESCENA 5*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function () {
            Player.hideOthersBut('escena_05');
            //Player.desActivaJordanOpciones();
            ANIM.desActivaJordanOpciones();
        }, "escena_5");
        
        ANIM.main_tl.addCallback(function () {
            ANIM.main_tl.pause();
            ANIM.interactividad(5);
            Player.activaBtnSiguiente();
        /*  Player.tooglePlayPauseIco();*/
            Player.resetSubtitulos();
            Player.playSoundFX('organi', true);
            Player.cambiaVolume('organi',0.2);
            console.log("fin_escena 5");
        }, "fin_escena_5");
        
        
        /*LLAMADAS Y FUNCIONES ESCENA 6*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function () {
            Player.hideOthersBut('escena_06');
            //Player.desActivaJordanOpciones();
            ANIM.desActivaJordanOpciones();
        }, "escena_6");

        ANIM.main_tl.addCallback(function () {
            ANIM.main_tl.pause();
            ANIM.interactividad(6);
            Player.activaBtnSiguiente();
            /*Player.tooglePlayPauseIco();*/
            Player.resetSubtitulos();
            Player.playSoundFX('metro', true);
            Player.cambiaVolume('metro',0.2);
        }, "fin_escena_6");
        
        /*LLAMADAS Y FUNCIONES ESCENA 7*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function () {
            Player.hideOthersBut('escena_07');
            //Player.desActivaJordanOpciones();
            ANIM.desActivaJordanOpciones();
        }, "escena_7");
        
        ANIM.main_tl.addCallback(function () {
            ANIM.main_tl.pause();
            //            ANIM.interactividad(7, Player.activaBtnSiguiente);
            ANIM.interactividad(7);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('peatones');
            Player.cambiaVolume('peatones',0.5);
        }, "fin_escena_7");
        
        /*LLAMADAS Y FUNCIONES ESCENA 8*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function () {
            Player.hideOthersBut('escena_08');
            //Player.desActivaJordanOpciones();
            ANIM.desActivaJordanOpciones();
        }, "escena_8");
        
        ANIM.main_tl.addCallback(function () {
            ANIM.main_tl.pause();
            ANIM.interactividad(8);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('guitarra_alegre');
            Player.cambiaVolume('guitarra_alegre',0.8);
        }, "fin_escena_8");
        
        /*LLAMADAS Y FUNCIONES ESCENA 9*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function () {
            Player.hideOthersBut('escena_09');
            //Player.desActivaJordanOpciones();
            ANIM.desActivaJordanOpciones();
        }, "escena_9");
        
        ANIM.main_tl.addCallback(function () {
            ANIM.main_tl.pause();
            ANIM.interactividad(9);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('pasa_bus');
            Player.cambiaVolume('pasa_bus',0.2);
        }, "fin_escena_9");
        
        /*LLAMADAS Y FUNCIONES ESCENA 10*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function () {
            Player.hideOthersBut('escena_10');
            //Player.desActivaJordanOpciones();
            ANIM.desActivaJordanOpciones();
        }, "escena_10");
        
        ANIM.main_tl.addCallback(function () {
            ANIM.main_tl.pause();
            //            ANIM.interactividad(7, Player.activaBtnSiguiente);
            ANIM.interactividad(10);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('plaza');
            Player.cambiaVolume('plaza',0.2);
        }, "fin_escena_10");
        
        

        /*LLAMADAS Y FUNCIONES ESCENA 11*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function () {
            Player.hideOthersBut('escena_11');
            //Player.desActivaJordanOpciones();
            ANIM.desActivaJordanOpciones();
        }, "escena_11");
        
        ANIM.main_tl.addCallback(function () {
            ANIM.main_tl.pause();
            ANIM.interactividad(11);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('guitarra_alegre');
            console.log('FINAL');
        }, "fin_escena_11");

        ANIM.creaAnimInteractividad();
        ANIM.main_tl.pause();
    },
    creaAnimInteractividad: () => {
        
        //Animacion Tiburon - escena 0
        ANIM.anim_interact_0_tiburon = new TimelineMax({repeat:1}); // creo la interacción
        ANIM.anim_interact_0_tiburon
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('aleteo');
                Player.cambiaVolume('aleteo',0.2);
            })
            .fromTo('#escena_00 .tiburon', 3,{backgroundPosition:'0% 0%'},{backgroundPosition:'-500% 0%', ease: SteppedEase.config(5)})
            .addLabel('final');
        ANIM.anim_interact_0_tiburon.pause();
        
        //Fin Animacion Tiburon - escena 0

        //Animacion Jordan - escena 1
        ANIM.anim_interact_1_jordan = new TimelineMax({repeat:2}); // creo la interacción
        ANIM.anim_interact_1_jordan
         
            .addLabel('inicio')
            .fromTo('#escena_01 .jordan', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
            .addLabel('final');
        ANIM.anim_interact_1_jordan.pause();
        
        //Fin Animacion Jordan - escena 1

        
        //Animacion Jordan - escena 1
        ANIM.anim_interact_1_rata = new TimelineMax({repeat:2}); // creo la interacción
        ANIM.anim_interact_1_rata
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('ratones');
                Player.cambiaVolume('ratones',0.8);
            })
            .fromTo('#escena_01 .rata', 3,{backgroundPosition:'0% 0%'},{backgroundPosition:'-800% 0%', ease: SteppedEase.config(8)})
            .addLabel('final');
        ANIM.anim_interact_1_rata.pause();
        
        //Fin Animacion Jordan - escena 1    

        //Animacion Jordan - escena 2
        ANIM.anim_interact_2_gatos = new TimelineMax({repeat:1}); // creo la interacción
        ANIM.anim_interact_2_gatos
         
            .addLabel('inicio')
            .fromTo('#escena_02 .gatos01', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
            .addLabel('final');
        ANIM.anim_interact_2_gatos.pause();
        
        //Fin Animacion Gatos - escena 2    

        //Animacion Gatos - escena 2
        ANIM.anim_interact_2_gatos_1 = new TimelineMax(); // creo la interacción
        ANIM.anim_interact_2_gatos_1
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('gatos');
                Player.cambiaVolume('gatos', 0.2);
            })
            .fromTo('#escena_02 .gatos02', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
            .addLabel('final');
        ANIM.anim_interact_2_gatos_1.pause();
        
        //Fin Animacion Gatos - escena 2  

         //Animacion Malabarista - escena 3
         ANIM.anim_interact_3_malabarista = new TimelineMax({repeat:2}); // creo la interacción
         ANIM.anim_interact_3_malabarista
          
             .addLabel('inicio')
             .addCallback(function(){
                Player.playSoundFX('circo');
                Player.cambiaVolume('circo', 0.2);
            })
             .fromTo('#escena_03 .malabares', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-400% 0%', ease: SteppedEase.config(4)})
             .addLabel('final');
         ANIM.anim_interact_3_malabarista.pause();
         
         //Fin Animacion Malabarista - escena 3


         //escena_05 Loro
         ANIM.anim_interact_05_loro = new TimelineMax({repeat:2}); // creo la interacción
         ANIM.anim_interact_05_loro
          
             .addLabel('inicio')
             .addCallback(function(){
                Player.playSoundFX('loro');
                Player.cambiaVolume('loro', 0.5);
            })
             .fromTo('#escena_05 .loro', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-800% 0%', ease: SteppedEase.config(8)})
             .addLabel('final')
                         
             ;
         ANIM.anim_interact_05_loro.pause();


         //escena_06 Gato
         ANIM.anim_interact_06_gato = new TimelineMax({repeat:2}); // creo la interacción
         ANIM.anim_interact_06_gato
          
             .addLabel('inicio')
             .addCallback(function(){
                Player.playSoundFX('gato_sonriente');
                Player.cambiaVolume('gato_sonriente',0.2);
            })
             .fromTo('#escena_06 .gato', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-400% 0%', ease: SteppedEase.config(4)})             
             .addLabel('final')
                         
             ;
         ANIM.anim_interact_06_gato.pause();

         //escena_07 Paloma 
         ANIM.anim_interact_07_paloma = new TimelineMax({repeat:2}); // creo la interacción
         ANIM.anim_interact_07_paloma
          
             .addLabel('inicio')
             .fromTo('#escena_07 .paloma', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-300% 0%', ease: SteppedEase.config(3)})             
             .addLabel('final')
                         
             ;
        ANIM.anim_interact_07_paloma.pause();
        
        //escena_08 Micro tiburon 
        ANIM.anim_interact_08_tiburon = new TimelineMax({repeat:2}); // creo la interacción
        ANIM.anim_interact_08_tiburon
        
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('splash');
                Player.cambiaVolume('splash',0.2);
            })
            .fromTo('#escena_08 .tiburonn', 3,{backgroundPosition:'0% 0%'},{backgroundPosition:'-500% 0%', ease: SteppedEase.config(5)})
            .addLabel('final')
                    
            ;
        ANIM.anim_interact_08_tiburon.pause();

        //escena_08 Micro se va 
        ANIM.anim_interact_09 = new TimelineMax({repeat:2}); // creo la interacción
        ANIM.anim_interact_09
        
            .addLabel('inicio')
            .fromTo('#escena_09 .bus', 3,{backgroundPosition:'0% 0%'},{backgroundPosition:'-400% 0%', ease: SteppedEase.config(4)})
            .addLabel('final')
                    
            ;
        ANIM.anim_interact_09.pause();

        //escena_09 Moneda  
        ANIM.anim_interact_10_moneda = new TimelineMax({repeat:2}); // creo la interacción
        ANIM.anim_interact_10_moneda
        
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('moneda');
                Player.cambiaVolume('moneda',0.5);
            })
            .fromTo('#escena_10 .moneda', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-500% 0%', ease: SteppedEase.config(5)})
            .addLabel('final')
                    
            ;
        ANIM.anim_interact_10_moneda.pause();

        //escena_10 Moneda 
        /*ANIM.anim_interact_11_pez = new TimelineMax({repeat:2}); // creo la interacción
        ANIM.anim_interact_11_pez
        
            .addLabel('inicio')
            .fromTo('#escena_10 .moneda', 3,{backgroundPosition:'0% 0%'},{backgroundPosition:'-500% 0%', ease: SteppedEase.config(5)})
            .addLabel('final')
                    
            ;
        ANIM.anim_interact_11_pez.pause(); */

        //escena_11 PEZ1 
        ANIM.anim_interact_11_pez = new TimelineMax({repeat:2}); // creo la interacción
        ANIM.anim_interact_11_pez
        
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('splash');
                Player.cambiaVolume('splash',0.5);
            })
            .fromTo('#escena_11 .pez1', 3, {backgroundPosition:'0% 0%'},{backgroundPosition:'-500% 0%', ease: SteppedEase.config(5)})
            .fromTo('#escena_11 .pez2', 3, { backgroundPosition: '0% 0%' }, { backgroundPosition: '-600% 0%', ease: SteppedEase.config(6)},{repeat:2})
            .fromTo('#escena_11 .pez3', 4, { backgroundPosition: '0% 0%' }, { backgroundPosition: '-700% 0%', ease: SteppedEase.config(7)},{repeat:3})
            .fromTo('#escena_11 .pez4', 3, { backgroundPosition: '0% 0%' }, { backgroundPosition: '-600% 0%', ease: SteppedEase.config(6)},{repeat:2})
            .fromTo('#escena_11 .pez5', 3, { backgroundPosition: '0% 0%' }, { backgroundPosition: '-500% 0%', ease: SteppedEase.config(5)},{repeat:3})
            .fromTo('#escena_11 .pez6', 4, { backgroundPosition: '0% 0%' }, { backgroundPosition: '-600% 0%', ease: SteppedEase.config(6)},{repeat:2})
            
            .addLabel('final')
                    
            ;
        ANIM.anim_interact_11_pez.pause();
        
        //Array de anin interacts
        ANIM.arr_interacts = [

            ANIM.anim_interact_1, // agrego la interacción al array
            ANIM.anim_interact_0_tiburon, 
            ANIM.anim_interact_1_jordan,
            ANIM.anim_interact_1_rata,
            ANIM.anim_interact_2_gatos,
            ANIM.anim_interact_2_gatos_1,
            ANIM.anim_interact_3_malabarista,
            ANIM.anim_interact_4_palomap1,
            ANIM.anim_interact_4_palomap2,
            ANIM.anim_interact_05_loro,
            ANIM.anim_interact_06_gato,
            ANIM.anim_interact_07_paloma,
            ANIM.anim_interact_08_tiburon,
            ANIM.anim_interact_09,
            ANIM.anim_interact_10_paloma,
            ANIM.anim_interact_11_pez,
            
        ];
        
        ANIM.setIniciales();
    },
    pausaInteractividad:() =>{
        ANIM.arr_interacts.map((anim) => { // y como la interacción está acá las pauso todas al mismo tiempo a voluntad
            anim.pause();
            anim.eventCallback("onComplete", null);  //<--- para matar los eventos de onComplete para evitar que muestren los botones en otra escenas
        });
       
        ANIM.setIniciales();
    },
    setIniciales:() => {
        //estado inicial
        
//        TweenMax.killTweensOf("#escena_00 .stuff");
        TweenMax.set('#escena_00 .interact',{scale:1, transformOrigin:'1280px 395px'});
        TweenMax.set('#escena_00 .tiburon',{scale:1, y:0, rotation:0});
        
        
        ANIM.pauseWaitSound();
        ANIM.pauseAnimaciones();
        $('.indicador_interactividad').css({'display':'none'});
        
    },
    displayInteract:(cualEscena) => {
        $(cualEscena+' .interact').css({'display':'block'});
    },
    interactividad:(nEscena, callback = undefined, btn_especifico = "primario") => {
        let i_st = nEscena > 9 ? (nEscena) : `0${(nEscena)}`;
        
//        console.log(i_st);
        
        var btn = $('#escena_'+i_st +' .btn_interact.'+btn_especifico);
        var cb = callback;
        btn.css({"display":"block"});
        TweenMax.fromTo(btn,1,{alpha:0},{alpha:1});
        let muestralo = (div, cbb) => {
            if(cbb !== undefined){
                cbb();
            }
            div.css({"display":"block"});             
        }
         switch (nEscena){
            case 0:
              /**/ if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_0_tiburon.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_0_tiburon.play(0);
                        
                    });
                 }
                break;
             case 1:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_1_jordan.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_1_jordan.play(0);
                        
                    });
                 }
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_1_rata.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_1_rata.play(0);
                        
                    });
                 }
                break;
            case 2:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_2_gatos.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_2_gatos.play(0);
                    });
                 }
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_2_gatos_1.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_2_gatos_1.play(0);
                    });
                 }
                 
                 break;
             case 3:
                    if(btn.hasClass('primario')){
                        btn.click(function(){
                            $(this).css({"display":"none"});
                            ANIM.anim_interact_3_malabarista.eventCallback("onComplete", muestralo, [$(this), cb]);   
                            ANIM.anim_interact_3_malabarista.play(0);
                        });
                    }
                 break;
             case 4:
                
                 break;
             case 5:
                    
                 if (btn.hasClass('primario')) {
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_05_loro.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_05_loro.play(0);
                        
                    });
                    }
                
                 break;
            case 6:
                /**/ if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_06_gato.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_06_gato.play(0);
                        
                    });
                }
                
                 break;
             case 7:
                 /**/ if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_07_paloma.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_07_paloma.play(0);
                        
                    });
                 }
                 break;
             case 8:
                if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_08_tiburon.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_08_tiburon.play(0);
                        
                    });
                 }
                 break;
            case 9: ANIM.anim_interact_09
                if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_09.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_09.play(0);
                        
                    });
                }
                break;
            case 10:
                if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_10_moneda.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_10_moneda.play(0);
                        
                    });
                }
                break;
                case 11:
                    if(btn.hasClass('primario')){
                        btn.click(function(){
                            $(this).css({"display":"none"});
                            ANIM.anim_interact_11_pez.eventCallback("onComplete", muestralo, [$(this), cb]);   
                            ANIM.anim_interact_11_pez.play(0);
                            
                        });
                    }
                 break;
             
        }
    },
    compensaEscenas:(d) => {
        // ESTA FUNCIÓN HAY QUE CONFIGURARLA A MANO POR CADA ESCENA QUE LO NECESITE 
        // (EN ESTE CASO LA ILUSTRACIÓN SE PERDÍA POR ARRIBA, POR ESO ESE COMPENSA POR TOP,
        // SI FUESE AL REVÉS COMPENSARÍA POR BOTTOM)
       let dif = Math.abs(d); 
//        $('#escena_00').css({'bottom':dif+'px'});
//        $('#escena_01').css({'top':dif+'px'});
//        $('#escena_02').css({'bottom':dif+'px'});
//        $('#escena_03').css({'bottom':dif+'px'});
//        $('#escena_04').css({'bottom':dif+'px'});
//        $('#escena_05').css({'bottom':dif+'px'});
//        $('#escena_07').css({'bottom':dif+'px'});
//        $('#escena_08').css({'bottom':dif+'px'});
//        $('#escena_09').css({'bottom':dif+'px'});
//        $('#escena_10').css({'bottom':dif+'px'});
    }
         /*↑↑↑↑ HASTA LA ANTERIOR ↑↑↑↑↑*/
};