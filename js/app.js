const app = new Vue({
    el:'#app',
    data:{
        title : "Hola crick",
        puntos : 0,
        password : "test02",
        enterpass : null,
        contador: 0,
        premio: "Tu premio aparecerá aquí",
    },
    mounted(){

    },
    methods:{
        passwordLess(){
            this.title="Lee bien la carta, crack";
            Swal.fire({
              title: '¿Qué paso crack?',
              text: 'En el sobre hay una carta, descubre la combinación de letras, esa es la contraseña...',
              icon: 'question',
              confirmButtonText: 'Ok ☺'
            });
        },
        login(){
            if(this.enterpass === this.password){
                $("#first-element").addClass('fade-in');
                setTimeout(function(){
                    $("#first-element").addClass('d-none');
                },5000);
                $("#marcador").removeClass('d-none');
                $("#1").removeClass('d-none');
                this.contador+=1;
            }else{
                Swal.fire({
                    title: '¿Qué paso crack?',
                    text: 'En el sobre hay una carta, descubre la combinación de letras, esa es la contraseña...',
                    icon: 'question',
                    confirmButtonText: 'Ok ☺'
                });
            }
        },
        sumarPuntos(puntos){
            if(puntos === 10){
                Swal.fire({
                    title: 'Muy Bien!!!',
                    text: 'Obtienes: '+puntos+' puntos',
                });
                this.puntos+=10;
            }else if(puntos === 5){
                Swal.fire({
                    title: 'Uffff... casi',
                    text: 'Obtienes: '+puntos+' puntos',
                });
                this.puntos+=5;
            }else if(puntos === 3){
                Swal.fire({
                    title: 'Mmmm vaya',
                    text: 'Obtienes: '+puntos+' puntos',
                });
                this.puntos+=3;
            }else{
                Swal.fire({
                    title: 'No pues si...',
                    text: 'Obtienes: '+puntos+' puntos',
                });
                this.puntos+=1;
            }
            this.preguntasController();
        },
        preguntasController(){
            $("#"+this.contador+"").addClass('d-none');
            this.contador+=1;
            console.log("Aqui estamos");
            $("#"+this.contador+"").removeClass('d-none');
            //$("#marcador").removeClass('d-none');
            if(this.contador===16){
                this.obtenerPremio();
            }
        },
        obtenerPremio(){
            Swal.fire({
                title: 'Muy Bien!!!',
                text: 'Ha finalizado el juego... revisa que premio ganaste.'
            });
            if(this.puntos===150){
                this.premio = "¡Un tatuaje TODO pagado!";
            }else if(this.puntos<=149 && this.puntos>=130){
                this.premio = "Yo escojo 3 meses todos los planes.  Y te invito a comer donde tu quieras.";
            }else if(this.puntos<=129 && this.puntos>=110){
                this.premio = "La muñequita que quieras (COMPLETA O A COMPLETAR)";
            }else if(this.puntos<=109 && this.puntos>=80){
                this.premio = "Te invito a comer donde tu quieras.";
            }else if(this.puntos<=79 && this.puntos>=50){
                this.premio = "Te invito un Starbucks";
            }else if(this.puntos<=49){
                this.premio = "¿Qué paso master? Tan poquitos... mejor invitame algo tú a mi... WTF amiga jaja"
            }
            $("#premio").removeClass('d-none');
        },
        refresh(){
            location.reload();
        },
        creditos(){
            Swal.fire({
                title: 'CREDITOS',
                text: 'Realizado con mucho cariño para ti, Dianita. Gracias por 4 años increíbles a tu lado. Y agradecimientos a las personas que me enseñaron a programar para poder hacer este proyecto realidad.[Elvia, Adriana, Profe Zegarra, Pedro, Adrián, Carlos y Diego]'
            });
        }
    },
    computed:{
        
    }
})


