<template>
  <v-main fluid>

    <v-row>
      <v-col
        cols="12"
        md="4"
      >

        <v-card
          elevation="24"
          class="mx-auto"
          v-if="modo=='calculador'"
          outlined
          rounded
          dark
          colorxxx="light-blue darken-3"
          imgxx="https://www.wallpaperflare.com/static/930/175/684/circles-highlights-background-form-wallpaper-preview.jpg"
          img="https://cdn.pixabay.com/photo/2015/08/18/10/42/form-893708_960_720.jpg"
        >

          <v-card-title>
            <p class="font-weight-black">
              ¡Sacá tu crédito 100% online!
            </p>
          </v-card-title>

          <v-divider></v-divider>

          <v-slider
            v-model="ex1.val"
            @change="calCuo"
            :thumb-color="ex1.color"
            thumb-label="always"
            :label="ex1.label"
            track-color="green"
            height="150"
            thumb-size="50"
            step="1000"
            max="120000"
            min="0"
            ticks
          >
            <!-- 
            <template v-slot:append>
              <v-text-field
                v-model="ex1.val"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 100px"
              ></v-text-field>
            </template>
          -->

          </v-slider>

          <v-slider
            v-model="ex2.val"
            :thumb-color="ex1.color"
            thumb-label="always"
            @change="calCuo"
            :label="ex2.label"
            track-color="green"
            height="50"
            thumb-size="50"
            :tick-labels="cuotasLabel"
            step="3"
            max="24"
            min="3"
            ticks
          >
            <!-- 
            <template v-slot:append>
              <v-text-field
                v-model="ex2.val"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 40px"
              ></v-text-field>
            </template>
            -->

          </v-slider>
          <!--  
          <p
            v-if="impcuo!=0"
            class="font-weight-black"
          >Valor aproximado de la cuota: ${{ Intl.NumberFormat("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(impcuo)}}(*)</p>

            
          <v-select
            v-model="select2"
            label="Seleccione cantidad de Cuotas"
            outlined
            rounded
            filled
            :items="items2"
          ></v-select>        
          -->
          <div class="d-flex">
            <p
              v-if="impcuo!=0"
              class="font-weight-black"
            >Valor de la cuota: ${{ Intl.NumberFormat("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(impcuo)}}(*)</p>
            <v-spacer>
            </v-spacer>
            <v-btn
              :disabled="impcuo==0"
              color="success"
              class="mr-4"
              @click="solicitar"
              rounded
            >
              Solicitar
            </v-btn>
          </div>

          <p
            v-if="impcuo!=0"
            style="font-size: 10px;"
          >
            *Cuota aproximada, Plazo de validez de simulación 15 días, Cartera de consumo, Sujeto a verificación comercial y crediticia del departamento de créditos, Tasa fija en pesos, Sistema de amortización francés. Perfil A (comportamiento en pagos “Excelente”) TEA: 82,44%. Perfil B (comportamiento en pagos “Muy Bueno”) TEA: 116,20%. Perfil C (comportamiento en pagos “Bueno”) TEA: 146,98%. CFT min: 99,83%. CFT max: 214,06%. El costo financiero total nominal anual incluye capital, intereses, comisión de originación e IVA. Los impuestos nacionales y provinciales estarán a cargo del cliente.

          </p>

        </v-card>

        <v-card
          elevation="24"
          class="mx-auto"
          v-if="modo=='datero'"
          outlined
          rounded
          dark
          color="light-blue darken-3"
          img="https://www.wallpaperflare.com/static/930/175/684/circles-highlights-background-form-wallpaper-preview.jpg"
          imgyy="https://thenetnow.com/wp-content/uploads/2017/01/homepage-internet.png"
          imgxx="https://cdn.pixabay.com/photo/2015/08/18/10/42/form-893708_960_720.jpg"
        >
          <v-card-title class="py-2">
            <p class="font-weight-black">
              Ingresa tus datos
            </p>
          </v-card-title>

          <v-divider></v-divider>

          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >

            <v-text-field
              v-model="form['dni']"
              class="py-5"
              dense
              :counter="8"
              type="number"
              label="Nro.DNI."
              clearable
              filled
              required
              rounded
              outlined
            ></v-text-field>

            <v-text-field
              v-model="form['name']"
              dense
              :rules="nameRules"
              label="Apellido y Nombre"
              clearable
              filled
              required
              rounded
              outlined
            ></v-text-field>

            <v-radio-group
              v-model="form['sexo']"
              row
              required
            >
              <template v-slot:label>
                <p style="font-size: 15px;"> <strong>Sexo:</strong></p>
              </template>
              <v-radio
                label="Masculino"
                value="M"
              ></v-radio>
              <v-radio
                label="Femenino"
                value="F"
              ></v-radio>
              <v-radio
                label="Otro"
                value="O"
              ></v-radio>
            </v-radio-group>

            <v-row>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  v-model="form['tel_area']"
                  label="Cod.Area"
                  type="number"
                  dense
                  prefix="+54 - 0"
                  clearable
                  required
                  rounded
                  outlined
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  v-model="form['tel_nro']"
                  type="number"
                  dense
                  label="Nro.Celular"
                  prefix="15"
                  clearable
                  required
                  rounded
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>

            <v-text-field
              v-model="form['email']"
              dense
              :rules="emailRules"
              label="E-mail"
              clearable
              filled
              required
              rounded
              outlined
            ></v-text-field>

            <v-text-field
              v-model="form['ingNeto']"
              dense
              type="number"
              prepend-inner-icon="mdi-currency-usd"
              label="Ingreso Mensual Neto"
              required
              clearable
              filled
              rounded
              outlined
            ></v-text-field>

            <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'Debes aceptar continuar!']"
              color="green"
            >
              <template v-slot:label>
                <div @click.stop="">
                  Acepta los
                  <a
                    href="#"
                    style="color:white"
                    @click.prevent="terms = true"
                  >Términos y Condiciones?</a>
                </div>
              </template>
            </v-checkbox>

            <v-btn
              :disabled="!valid"
              small
              color="success"
              class="mr-4"
              @click="submitForm"
              rounded
            >
              Solicitar Ya!
            </v-btn>

            <v-btn
              color="error"
              small
              class="mr-4"
              @click="reset"
              rounded
            >
              Cancelar
            </v-btn>

            <v-btn
              color="primary"
              small
              class="mr-4"
              @click="modo='calculador'"
              rounded
            >
              Regresa
            </v-btn>

          </v-form>
          <v-dialog
            v-model="terms"
            width="70%"
          >
            <v-card>
              <v-card-title class="title">
                Términos y Condiciones
              </v-card-title>
              <v-card-text
                v-for="n in 5"
                :key="n"
              >
                {{ content }}
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="purple"
                  @click="terms = false"
                >
                  Ok
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

        </v-card>

      </v-col>
    </v-row>

  </v-main>
</template>
<script>
import axios from 'axios';
export default {
  data () {

    return {
      ex1: { label: 'Seleccione Monto', val: 0, color: 'orange' },
      ex2: { label: 'Seleccione Cuotas', val: 0, color: 'orange' },
      form: {
        dni: '',
        tel_area: '',
        tel_nro: '',
        name: '',
        email: '',
        sexo: [
          'Masculino',
          'Femenino',
          'Otro',
          'Prefiero no decir',
        ],
        ingNeto: '',
      },
      valid: true,

      nameRules: [
        v => !!v || 'Nombre es requerido',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],

      emailRules: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+\..+/.test(v) || 'E-mail debe ser válido',
      ],

      checkbox: false,

      terms: false,
      cuotasLabel: [
        '3',
        '6',
        '9',
        '12',
        '15',
        '18',
        '21',
        '24',
      ],
      modo: 'calculador',
      impcuo: 0,
      content: `INTRODUCCIÓN

El presente documento establece los Términos y Condiciones Generales (los “Términos y Condiciones Generales”) aplicables al uso de los servicios ofrecidos por CEIBO CRÉDITOS S.A. (los “servicios”) dentro del sitio www.ceibocreditos.com.ar(el “Sitio”).Cualquier persona que desee acceder al sitio y/ o utilizar sus servicios(el “Usuario") podrá hacerlo sujetándose a estos Términos y Condiciones Generales considerándose que los ha aceptado si realiza cualquier operación en el sitio.

1. PRINCIPIOS BÁSICOS

1.1.El Usuario que no acepte estos Términos y Condiciones Generales, los cuales tienen un carácter obligatorio y vinculante, deberá abstenerse de ingresar al sitio y de utilizar los servicios en él ofrecidos.

1.2.El Usuario debe leer, entender y aceptar todas las condiciones establecidas en los Términos y Condiciones Generales y en las Políticas de Privacidad así como en los demás documentos incorporados a los mismos por referencia, previo a operar en el Sitio.

1.3.El Usuario reconoce y acepta que el presente contrato y las relaciones surgidas a través del mismo, tendrán como principios esenciales la buena fe y el deber de colaboración entre las partes.En consecuencia, se obliga a interactuar en el sitio sobre la base de esos principios.

1.4.Los servicios del sitio sólo están disponibles para personas físicas que tengan capacidad legal para contratar.

1.5.No podrán utilizar los servicios las personas que no tengan esa capacidad, las personas jurídicas, los menores de edad o los usuarios que hayan sido suspendidos temporalmente o inhabilitados definitivamente por CEIBO CRÉDITOS S.A.

 

2. DATOS PERSONALES – SOLICITUD DE CRÉDITO

2.1.El usuario deberá completar el formulario de solicitud en todos sus campos con datos válidos y proporcionando sus datos personales de manera precisa y veraz para poder utilizar los servicios que brinda el Sitio.Asume igualmente el compromiso de actualizar esos datos personales cada vez que los mismos se modifiquen, notificando tal hecho a CEIBO CRÉDITOS S.A..

2.2.El usuario garantiza la veracidad, exactitud y vigencia de los datos personales ingresados, respondiendo por ello ante CEIBO CRÉDITOS S.A., y el acreedor si este fuera otra entidad y cualquier organismo controlador que lo requiera.

2.3.CEIBO CRÉDITOS S.A., y en su caso el acreedor si éste fuera otra entidad, podrá solicitar al usuario la presentación o envío de cualquier comprobante y / o dato adicional que considere necesario a efectos de corroborar sus datos personales, así como suspender temporal o definitivamente al usuario cuyos datos no hayan podido ser confirmados sin que ello genere derecho alguno al usuario.CEIBO CRÉDITOS S.A.podrá solicitar la información complementaria que estime pertinente con miras a verificar la veracidad de los datos personales aportados por el usuario.


2.4.CEIBO CRÉDITOS S.A.y en su caso, también al acreedor si éste fuera otra entidad, se reserva el derecho de rechazar cualquier solicitud de registración así como el de cancelar una registración previamente aceptada, sin que esté obligado a comunicar o exponer las razones de su decisión y sin que ello genere derecho alguno a favor del usuario.

2.5.El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley Nº 25.326.La DIRECCION NACIONAL DE PROTECCION DE DATOS PERSONALES, Organo de Control de la Ley Nº 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales.

3. MODIFICACIÓN DE LOS TERMINOS Y CONDICIONES GENERALES

CEIBO CRÉDITOS S.A.podrá actualizar y modificar en cualquier momento los Términos y Condiciones Generales, los que entrarán en vigencia a partir del momento en que sean publicados en el Sitio o notificadas al Usuario, lo que ocurra primero.Respecto de las operaciones ya concertadas, las modificaciones que tengan incidencia relevante en las condiciones contractuales, se efectuarán de acuerdo a lo que determinen las disposiciones que le sean aplicables, y serán notificadas por e - mail al cliente.En el caso que éste no aceptase las modificaciones, podrá dar por rescindido el contrato, dentro de los cinco días de haber sido notificado, lo que deberá comunicar en forma fehaciente, procediendo a la precancelación del saldo adeudado con más los gastos incurridos en la operación en un plazo no mayor a 15 días a contar desde que hubiera comunicado la rescisión.

4. PRIVACIDAD DE LA INFORMACIÓN

El Usuario presta su plena conformidad con la Política de Privacidad establecida en un enlace separado en el Sitio.

5. COMPROMISO DEL USUARIO

El usuario se compromete a:

        5.1 No efectuar actos u operaciones que generen riesgos al Sitio y / o tiendan a apropiarse de técnicas o contenidos del mismo.

5.2.No transmitir mensajes anónimos o bajo un seudónimo

5.3.No transmitir ningún archivo que contenga virus o cualquier otro elemento contaminante o destructivo para el Sitio como puede ser un robot, araña(spider), gusano, troyano, u otros aparatos automáticos o procesos manuales para monitorear o copiar las páginas del sitio o la información contenida en él

5.4.No reproducir, transmitir, distribuir, exhibir públicamente o presentar públicamente las informaciones contenidas en el sitio sin el previo consentimiento otorgado por escrito por CEIBO CRÉDITOS S.A..

5.5.En caso de efectuar el usuario cualquiera de las actividades mencionadas en los apartados anteriores, CEIBO CRÉDITOS S.A.podrá disponer de inmediato su suspensión temporaria o definitiva del sitio y la cancelación de su registración como usuario, sin perjuicio del cumplimiento de las obligaciones contraídas y de las acciones legales que pudieran corresponder, particularmente respecto de los daños causados.

 

6. RESPONSABILIDAD DE CEIBO CRÉDITOS S.A.

6.1.CEIBO CRÉDITOS S.A.pone a disposición del usuario un espacio virtual donde el mismo accede voluntariamente y sujeto a los Términos y Condiciones Generales, a fin de utilizar los servicios y entretenimientos que el sitio brinda.No asume ninguna responsabilidad fuera de las que se especifiquen en los contratos a suscribir individualmente con cada Usuario.

6.2.CEIBO CRÉDITOS S.A.no asume responsabilidad por la publicidad de terceros que contenga el sitio ni será responsable por las vinculaciones que el usuario establezca con ellos y / o con otros Usuarios.

6.3.CEIBO CRÉDITOS S.A.no asume responsabilidad por las eventuales consecuencias de cualquier índole resultantes de fallas en el sistema, en el servidor o en Internet que pudieran surgir del acceso y / o uso del sitio bajo cualquier modalidad que el usuario empleara.

6.4.CEIBO CRÉDITOS S.A.no garantiza el acceso y uso continuado o ininterrumpido de su sitio.El sistema puede eventualmente no estar disponible debido a dificultades técnicas o fallas de Internet.En tales casos se procurará restablecerlo con la mayor celeridad posible sin que por ello pueda imputársele algún tipo de responsabilidad.CEIBO CRÉDITOS S.A.no será responsable por eventuales errores u omisiones contenidos en el sitio.

6.5 La información y los contenidos del Sitio pueden contener errores tipográficos o inexactitudes.CEIBO CRÉDITOS S.A.no asume responsabilidad alguna de poner al día o enmendar cualquier información.

7. OTORGAMIENTO DE LOS CRÉDITOS

CEIBO CRÉDITOS S.A.ofrece un servicio para que el Usuario pueda solicitar créditos personales online de destino libre.


7.1.El usuario podrá solicitar a través del sitio el otorgamiento de créditos por los montos, plazos y condiciones ofrecidos por CEIBO CRÉDITOS S.A..A tal fin tendrá a su disposición en todo momento la siguiente información:

        7.1.1.Los montos susceptibles de ser acordados, cantidad de cuotas que podrá elegir libremente entre un mínimo y un máximo, forma de pago y condiciones contractuales.

7.2.Contando con la información señalada en el apartado anterior, el usuario podrá efectuar su solicitud de crédito en el Sitio, la cual le será respondida por CEIBO CRÉDITOS S.A.en una pantalla siguiente dentro del sitio al momento de la solicitud o dentro del plazo de 72 hs.hábiles, mediante e - mail dirigido a su dirección de correo electrónico o llamado telefónico.CEIBO CRÉDITOS S.A.no asume obligación alguna y podrá otorgar o denegar el crédito a su exclusivo arbitrio.El usuario autoriza a CEIBO CRÉDITOS S.A.a solicitar información de bases de datos complementaria y / o ratificatoria de la proporcionada por él a los fines de la evaluación crediticia.

7.3.En caso de ser aprobado el crédito el Usuario será contactado por CEIBO CRÉDITOS S.A.mediante alguna de las vías de contacto informadas en la solicitud para ser asistido en la gestión del crédito, en caso de ser necesario.

7.4.El usuario recibirá un e - mail con el texto de la solicitud de crédito a suscribir, la autorización de débito en cuenta y el pagaré mediante el cual se instrumentará su compromiso de pago, pudiendo libremente guardarlo en su ordenador y / o imprimirlo.Adicionalmente podrá solicitarse documentación adicional que será requerida para la liquidación del crédito.

7.5.El usuario deberá elegir presentarse en alguna de las sucursales habilitadas de OCA o solicitar visita a domicilio a efectos de suscribir la documentación necesaria para instrumentar la operación, consistente en solicitud de crédito, autorización de débito en cuenta y pagaré, cuyos textos habrá analizado suficientemente, además de la documentación solicitada y detallada por correo electrónico al momento de confirmarse la instrucción de liquidación.

7.6.La aprobación final del crédito y su posterior liquidación quedará sujeta al análisis de la documentación física recibida en las oficinas de CEIBO CRÉDITOS S.A..Asimismo el Usuario entiende y acepta que CEIBO CRÉDITOS S.A.podrá, bajo su exclusivo criterio, desistir del otorgamiento del préstamo en cualquier tramo de la operatoria.

7.7.Una vez recibida la documentación física y previa conformidad por parte de CEIBO CRÉDITOS S.A., se procederá a su liquidación final, depositándose el importe neto a liquidar que surja de la solicitud de crédito en la cuenta informada por el Usuario.

7.8.El usuario se obliga a devolver la suma recibida con más los intereses, gastos y comisiones correspondientes.Todos los pagos que deba efectuar el usuario a causa de la presente, se harán efectivos mediante débitos automáticos de la cuenta indicada por el usuario e identificada con su CBU(clave bancaria única).

7.9.A ese fin, el usuario autoriza a CEIBO CRÉDITOS S.A., y en su caso, también al acreedor si éste fuera otra entidad y / o a cualquier otra entidad intermedia contratada por CEIBO CRÉDITOS S.A.para tal fin, a efectuar tales débitos exclusivamente por los importes y en las fechas de vencimiento pactadas o las derivadas del uso de modalidades acordadas, obligándose el usuario a mantener en su referida cuenta bancaria los fondos suficientes para que esos débitos puedan hacerse efectivos.

7.10.En caso que por cualquier motivo no pudiera efectuarse alguno de los débitos bancarios de cada cuota, CEIBO CRÉDITOS S.A.notificará el rechazo del débito a fin de que el usuario proceda al pago de la suma debida.En tal caso, se considerará como fecha de mora la del rechazo del débito.Dicha notificación será realizada por e - mail, mensaje de texto, llamado telefónico o cualquier otro medio de contacto disponible.

7.11.A criterio de CEIBO CRÉDITOS S.A.podrá notificarse al Usuario que la suma se ha debitado correctamente.

8. PROPIEDAD INTELECTUAL.

Los contenidos de las pantallas relativas a los servicios del sitio como así también los programas, bases de datos, redes, archivos que permiten al Usuario acceder y usar su Cuenta, son de propiedad exclusiva de CEIBO CRÉDITOS S.A.y están protegidas por las leyes y los tratados internacionales de derecho de autor, marcas, patentes, modelos y diseños industriales.El uso indebido y la reproducción total o parcial de dichos contenidos quedan prohibidos, salvo autorización expresa y por escrito de CEIBO CRÉDITOS S.A..




9. NOTIFICACIONES


El usuario acepta la plena validez de las notificaciones enviadas a CEIBO CRÉDITOS S.A.y recibidas de la misma, o en su caso, también del acreedor si éste fuera otra entidad, a través del sitio y / o por e - mail, destacándose que el presente contrato se suscribe sobre la base de la buena fe contractual y el deber de colaboración de las partes.

10. OTRAS DISPOSICIONES

10.1.El usuario antes de aceptar los términos y condiciones generales ha tomado pleno conocimiento de los mismos, los ha tenido a la vista y leído con detenimiento y cuenta con copia de ellos a su disposición, pudiendo guardarla en su ordenador, imprimirla o retirar copia firmada por CEIBO CRÉDITOS S.A.en el domicilio especial fijado por la misma.

10.2.El usuario presta desde ya su conformidad para que el acreedor pueda ceder libremente los derechos resultantes del préstamo solicitado, sin que ello pueda implicar modificación alguna de las obligaciones asumidas por el usuario.En caso que la cesión se realizara conforme a lo dispuesto en los arts. 70, 71 y 72 de la ley 24.441, no será requisito la notificación al Usuario, deudor del préstamo.

11. JURISDICCIÓN Y LEY APLICABLE

Para todos los efectos de la presente, las partes se someten a la competencia de la Justicia Nacional en lo Comercial de la Capital Federal.CEIBO CRÉDITOS S.A.constituye domicilio especial en Av.Felix Olazabal 1515, piso 12, oficina 1211 de la Ciudad Autónoma de Buenos Aires.`

    }
  },

  methods: {
    calCuo () {
      this.impcuo = this.ex1.val / this.ex2.val
    },

    submitForm () {
      this.sendEmail()
      if (!this.$refs.form.validate()) {
        return
      }

      this.valid = true
      axios.post('/contact', this.form)
        .then((res) => {
          alert(res)
          //Perform Success Action
        })
        .catch((error) => {
          alert(error)
          // error.response.status Check status code
        }).finally(() => {
          //Perform action in always
        });
    },

    sendEmail () {
      this.$loadScript("https://smtpjs.com/v3/smtp.js")
        .then(Email => {                                         //this Promise return nothing!!!
          Email.send({
            Host: "smtp.gmail.com",
            Username: "pepe80",
            Password: "password",
            To: 'them@website.com',
            From: "you@isp.com",
            Subject: "This is the subject",
            Body: "And this is the body"
          }).then(
            message => alert(message)
          );
        })
        .catch(() => {
          // Failed to fetch script
        });

    },


    reset () {
      this.$refs.form.reset()
    },
    solicitar () {
      this.modo = 'datero'
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}
</script>