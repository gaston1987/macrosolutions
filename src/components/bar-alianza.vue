<template>
  <div id="alianza">
    <v-app-bar
      app
      height="80px"
      id="app-bar-ali"
      elevation="0"
    >

      <!--      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />-->

      <v-toolbar-title>
        <div>
          <router-link to="/">
            <v-img
              id="logo"
              src="@/assets/Alianza_1.png"
              contain
              max-height="70px"
              position="center"
              class="animate__animated animate__fadeInUp"
            />

          </router-link>

        </div>

      </v-toolbar-title>
      <v-img
        id="logo2"
        src="@/assets/Alianza02.png"
        contain
        max-height="50px"
        position="left"
        class="animate__animated animate__fadeInUp"
      />
      <v-spacer />

      <div id="menuali">
        <v-tabs
          class="hidden-sm-and-down"
          optional
          id="no-background-hover"
        >
          <v-tab
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
            id="no-background-hover"
            color="transparent"
          > <a
              href="#simu"
              v-smooth-scroll
            >
              Simulador de Creditos </a>
          </v-tab>

          <v-tab
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
          >
            <a
              href="#cns-cred"
              v-smooth-scroll
            >
              Consulte su Credito</a>
          </v-tab>

          <v-tab
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
          >
            <a
              href="http://creditos.am-sistemas.com/"
              target='new'
            >
              Red de Venta</a>
          </v-tab>

          <v-tab
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
            @click="onMacro"
          > <a
              href="#"
              v-smooth-scroll
            >
              Regresa a MacroSolutions</a>
          </v-tab>

        </v-tabs>
      </div>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
        dark
        color="blue accent-4"
        medium
        elevation="5"
      />
      <home-drawer
        v-model="drawer"
        :items="this.items_alianza"
      />

    </v-app-bar>

    <parallax-alianza>
    </parallax-alianza>

    <landing-alianza>
    </landing-alianza>

    <cns-credito>
    </cns-credito>
    <v-col
      cols="12"
      class="pie"
    >
      <v-footer :padless="true">
        <v-card
          flat
          tile
          width="100%"
          class="white--text text-center"
          style=" background: #585454"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0539735026796!2d-58.37322388484934!3d-34.60279666495628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a33532cf4f7049%3A0xf99b0dbe84a50b6d!2s25+de+Mayo+431%2C+C1002ABI+CABA!5e0!3m2!1ses!2sar!4v1506382137560"
            style="border:0"
            width="100%"
            height="440px"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>

          <v-row justify="center">

            <v-col
              flat
              cols=12
              class="col-md-6 col-xs-12 col-sm-12 "
              pt-20
            >

              <h3 style="margin-top:20px;">Sobre Nosotros</h3>

              <p style="text-align:justify; padding:25px">ALIANZA es la unidad de micro créditos de Macrosolutions SA. Nos especializamos en la colocación y administración de micro créditos
                personales utilizando herramientas y tecnología que nos permite determinar la capacidad
                de pago de nuestros clientes a los efectos no generar efectos contraproducentes por sobreendeudamiento. Creemos fuertemente en la inclusión
                Financiera y en ser la puerta de acceso al sistema bancario.
              </p>

            </v-col>

            <v-col
              flat
              class="col-md-6 col-xs-12 col-sm-12 "
            >

              <p style="text-align:center; margin-top:30px">
                <v-icon style="color:#1976d2; padding:10px; font-size:30px">mdi-office-building-marker-outline</v-icon>
                <b> 25 de Mayo 431, Piso 3, of. F </b>
              </p>
              <p style="text-align:center">
                <v-icon style="color:#1976d2; padding:10px; font-size:30px">mdi-phone-forward-outline</v-icon>
                <b> Tel: +54 11 52527626 </b>
              </p>
              <p style="text-align:center">
                <v-icon style="color:#1976d2; padding:10px; font-size:30px">mdi-whatsapp</v-icon>
                <a
                  href="https://api.whatsapp.com/send?phone=5491123765493"
                  target="blank"
                > <b>Chatea con Nosotros: +54 9 11 2376-5493</b> </a>
              </p>
              <v-btn
                v-for="(social, i) in socials"
                :key="i"
                :color="social.color"
                fab
                icon
                x-large
                position="right"
              >
                <v-icon>{{ social.icon }}</v-icon>
              </v-btn>
            </v-col>

          </v-row>
        </v-card>
        <v-card
          flat
          tile
          width="100%"
          class="secondary white--text text-center"
        >
          <v-row
            justify="center"
            class="white--text"
            style="font-size: 12px"
          >
            <a
              class="pr-3 pt-5"
              @click="terms = true"
            >Términos y Condiciones | </a>

            <a
              class="pr-3 pt-5"
              @click="politica = true"
            >Politicas de Privacidad | </a>

            <a
              class="pr-3 pt-5"
              style="text-decoration: none;"
              href="SOLICITUD DE PRESTAMO MODELO.pdf"
              target='new'
            >Contrato de adhesión – Ley 24.240 – de Defensa del Consumidor |</a>

            <a
              class="pr-3 pt-5"
              style="text-decoration: none;"
              href="Usuario_Financiero.pdf"
              target='new'
            >Información a usuarios financieros</a>

          </v-row>

          <v-dialog
            v-model="terms"
            width="70%"
          >
            <v-card>
              <v-card-title class="title">
                Términos y Condiciones
              </v-card-title>
              <v-card-text
                v-for="n in 1"
                :key="n"
              >
                <span v-html="content"></span>
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

          <v-dialog
            v-model="politica"
            width="70%"
          >
            <v-card>
              <v-card-title class="title">
                Politicas de Privacidad
              </v-card-title>
              <v-card-text
                v-for="n in 1"
                :key="n"
              >
                <span v-html="content_politica"></span>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="purple"
                  @click="politica = false"
                >
                  Ok
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-row justify="center">
            <v-col
              md="1"
              xd="12"
            >
              <a
                href="http://qr.afip.gob.ar/?qr=aKdeBZO9dnaiZtVd7b48Og,,"
                target="_F960AFIPInfo"
              >
                <v-img
                  width="100px"
                  src="http://www.afip.gob.ar/images/f960/DATAWEB.jpg"
                  border="0"
                ></v-img>
              </a>

            </v-col>
            <v-col
              md="2"
              xd="12"
            >
              <a
                href="http://www.bcra.gob.ar/BCRAyVos/Usuarios_Financieros.asp"
                target="new"
              >
                <v-img
                  src="@/assets/usr_finan.png"
                  contain
                  width="200px"
                  class="animate__animated animate__fadeInUp"
                ></v-img>
              </a>
            </v-col>
            <v-col
              md="2"
              xd="12"
            >
              <a
                href="https://www.argentina.gob.ar/aaip/datospersonales/reclama"
                target="new"
              >
                <v-img
                  contain
                  width="200px"
                  class="animate__animated animate__fadeInUp"
                  src="@/assets/reg_nac_datos.jpg"
                ></v-img>
              </a>
            </v-col>
            <v-col
              md="2"
              xd="12"
            >
              <a
                href="http://www.bcra.gob.ar"
                target="new"
              >
                <v-img
                  contain
                  width="90px"
                  class="animate__animated animate__fadeInUp"
                  src="@/assets/logo_bcra.png"
                ></v-img>
              </a>
            </v-col>
          </v-row>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <a
              href="https://indev.com.ar/"
              target="_blank"
            > INDEV - Deploying E-business </a>
          </v-card-text>
        </v-card>

      </v-footer>
    </v-col>

  </div>
</template>


    <script>
import LandingAlianza from './landing-alianza.vue';
import ParallaxAlianza from './parallax-alianza.vue';
import CnsCredito from './cns-credito.vue';


export default {

  name: 'HomeAppBar',

  components: {
    LandingAlianza,
    ParallaxAlianza,
    CnsCredito,
    HomeDrawer: () => import('./Drawer'),
  },



  data () {

    return {
      terms: false,
      politica: false,
      drawer: null,
      items_alianza: [
        { label: 'Simulador de Creditos', link: '#simu' },
        { label: 'Consulta Creditos', link: '#cns-cred' },
        { label: 'Red de Venta', link: 'http://creditos.am-sistemas.com/' },
        { label: 'Regresa a Macrosolutions', link: '/' },
      ],
      socials: [
        {
          icon: "mdi-facebook",
          color: "indigo",
        },
        {
          icon: "mdi-linkedin",
          color: "cyan darken-1",
        },
        {
          icon: "mdi-instagram",
          color: "red lighten-3",
        },
      ],

      content: `<h3>Aviso legal.</h3>
<p>Macrosolutions S.A. es una sociedad inscripta ante la Registro Público de Comercio que
funciona de acuerdo a su objeto social contenido en el contrato constitutivo y en
cumplimiento absoluto de la legislación que regula su actividad. Macrosolutions S.A. cumple
con sus obligaciones tributarias encontrándose registrada con la CUIT 30-71470096-7 y
declara que la sede central de sus operaciones se encuentra ubicada en calle 25 de Mayo
431, piso 3°F, CABA, Código Postal C1002ABI. (“en adelante “Macrosolutions”).</p>
<p>El acceso a y/o uso del sitio web www.macrosolutions.com.ar (en lo posterior el sitio)
requiere que los visitantes adhieran a estos términos y condiciones siendo bajo su única y
exclusiva responsabilidad la lectura del presente documento, debiendo comprender y
aceptar todas las políticas por el establecidas para el sitio y/o los productos que se
comercialicen por su intermedio.</p>
<p>El sitio NO DEBE ser utilizado para fines ilícitos o contrarios a la moral y las buenas
costumbres. Macrosolutions se reserva el derecho de denunciar ante las autoridades los
posibles fraudes, sustitución o robo de identidad que pudiera detectar como así
interrupciones, hackeos o saturaciones que los usuarios pudieran realizar sobre el sitio o
sus servidores. Ante el supuesto de que el Consumidor o Usuario NO ACEPTE los términos
y condiciones, deberá abstenerse de ingresar la sitio, utilizar el simulador, solicitar servicios,
o remitir información personal.</p>
<p>La última actualización de los términos y condiciones ha sido realizada en fecha 08/02/2021.</p>
<h3>Bienvenidos a Macrosolutions. El simulador.</h3>
<p>Macrosolutions pone a disposición del usuario el presente sitio y el simulador de créditos,
el cual ha sido desarrollado por uno o más proveedores, debiendo el usuario utilizarlo sin
contravenir la legislación, la buena fe y el orden público. El uso de las herramientas puestas
a disposición del visitante, implican la aceptación de los términos y condiciones y
consecuentemente el usuario quedara obligado por las cláusulas que se enumeran a
continuación.</p>
<p>1.- El usuario declara tener plena capacidad legal y real para contratar. En caso contrario se
abstendrá de navegar el sitio, utilizar el simulador o contratar servicios. Comprende que
continuar en el sitio sin cumplir los requisitos expone su responsabilidad y de quien
estuviera a su cargo o tutoría. El acceso a las prestaciones ofrecidas por Macrosolutions
estarán solamente disponibles para personas físicas que: (i) Sean mayores de edad según la
legislación vigente (18 años), (ii) Tengan capacidad legal para contratar, y (iii) Puedan
acreditar ingresos lícitos, regulares y que resulten ser titulares de una cuenta bancaria en
una Entidad Financiera sujeta al régimen del Banco Central de la República Argentina.</p>
<p>2.- Los Usuarios que cumplan los requisitos del punto anterior podrán utilizar el
sitio/aplicación y solicitar las prestaciones que Macrosolutions pudiera difundir por los
mismos siendo condición ineludible completar el formulario de registración, en carácter de
DECLARACION JURADA, sobre la veracidad y fidelidad de los datos allí completados.</p>
<p>3.- Al enviar los datos recolectados o al realizar la solicitud de un servicio, el usuario autoriza
expresamente a Macrosolutions a verificar su información personal, financiera y crediticia
mediante consultas a bases de datos públicas o privadas. Declara bajo juramento que ha
prestado su conformidad, asumiendo irrevocablemente la responsabilidad por cualquier
daño, perjuicio o consecuencia que se pudiera originar por la consulta de datos para
comprobar los antecedentes y pre-aprobar el otorgamiento del servicio.</p>
<p>4.- Una vez enviado los datos a Macrosolutions, el Usuario tiene el derecho de acceso a sus
datos personales, recolectados o almacenados por Macrosolutions, en forma gratuita en
cualquier momento siempre que acreditare un interés legítimo conforme a lo establecido
por el Artículo 14 de la Ley N° 25326 de Protección de Datos Personales.</p>
<p>5.- El envió por parte del Usuario de una solicitud implica que asume que será evaluado
crediticiamente y que la aprobación de la solicitud dependerá del análisis de riesgo
crediticio realizado por Macrosolutions. El simple envió de una solicitud por medio del
simulador no será vinculante en ningún modo para las partes si la misma no fuera aprobada
por el oferente. En el supuesto de que Macrosolutions rechazara una solicitud de crédito
por la información negativa registrada en una base de datos, informara al consumidor ante
su pedido en forma inmediata y gratuita el resultado de la consulta y la base donde la
obtuvo.</p>
<p>6.- Una vez pre-aprobada la solicitud realizada por el usuario, el área de riesgo crediticio
realizara una verificación de los datos y solicitara al usuario su consentimiento informado
por medio de un llamado telefónico o SMS que emitirá dentro de las 24 horas en que la
solicitud fuera aprobada. La aprobación definitiva dependerá de la entrevista realizada
donde se informará al usuario los términos y condiciones de la contratación y se requerirá
su aceptación expresa.</p>
<p>7.- El usuario acepta y brinda su consentimiento para que se le debite automáticamente de
la cuenta bancaria identificada por su CBU en los plazos y por los montos confirmados por
el usuario en la propuesta. Asumido esto, Macrosolutions podrá efectuar los débitos
automáticos por si o por medio de terceras entidades. Ante el supuesto de que se produjera
un rechazo del débito ordenado por parte de la Entidad Bancaria se emitirá una
comunicación por medios electrónicos o telefónicos a los fines de que el Usuario proceda
al pago inmediato de la suma en mora por medios alternativos de pago dispuestos por
Macrosolutions.</p>
<p>8.- El usuario se compromete a mantener la cuenta activa y con saldo suficiente al momento
de realizarse el débito y autoriza a Macrosolutions a debitar por el valor de hasta una cuota
y media (1 y 1⁄2) si el Usuario se encontrara en mora de sus obligaciones por insuficiencia de
saldo, aplicación de stop debit, cambios en su cuenta, y/o cualquier otro motivo ajeno a
Macrosolutions. Es obligación del usuario informar a la brevedad sobre cualquier cambio o
modificación en los datos bancarios y financieros, y autoriza a Macrosolutions a efectuar
control sobre los datos y a obtener nuevos datos de parte del usuario o terceros.</p>
<p>9.- La aceptación de las condiciones y oferta por parte del Usuario implicara la obligación
directa de parte de Macrosolutions de liquidar las sumas aprobadas en un plazo no mayor
a setenta y dos (72) horas hábiles desde que se efectuare la aprobación definitiva.
Macrosolutions informara al usuario si la entidad bancaria rechazara las transferencias por
ella efectuadas.</p>
<p>10.- El usuario podrá revocar la aceptación de la oferta dentro de los diez (10) días corridos
a partir de la aceptación de esta. Para efectuar este derecho el Usuario podrá notificar a
Macrosolutions por escrito o por medios electrónicos y telefónicos y efectuará la devolución
del importe recibido mediante transferencia bancaria cuentas de propiedad de
Macrosolutions y que esta informare oportunamente.</p>
<p>11.- Se establece que el usuario podrá precancelar los servicios contratados mediante el
sitio en cualquier momento. La precancelacion se tomará al vencimiento de la próxima
cuota desde el momento en que el Usuario se comunique con Macrosolutions y siempre
que no existan cuotas vencidas en mora. Macrosolutions informara al usuario el monto de
cancelación, el plazo y los medios de pagos disponibles para que el Usuario efectué el pago.</p>
<p>12.- El Usuario presta su conformidad para que Macrosolutions pueda ceder libremente en
fideicomiso o mediante otra forma los derechos resultantes de los servicios y asistencias
comercializadas mediante el sitio y el simulador de créditos, sin que esto signifique
modificar o extinguir las obligaciones del Usuario. En caso de cesión de derechos, se
realizará conforme a lo dispuesto por las leyes 24.441 y 26.994. La notificación al deudor
cedido se practicará conforme a la ley vigente y las prácticas comerciales, no siendo
necesaria la notificación personal o notarial.</p>
<h3>Protección de los datos personales del Usuario.</h3
<p>La información recopilada por Macrosolutions son datos personales otorgados por el titular,
por su propia voluntad y con la finalidad de instrumentar una operación de asistencia
crediticia, dentro del marco de la Ley N° 25326 de Protección de Datos Personales. El
otorgamiento de los datos de parte del Usuario implica la autorización expresa para que
Macrosolutions pueda utilizar la información y/o suministrarla a terceras personas para
diversos fines tales como el ofrecimiento de nuevos productos y servicios, a través de
diversos canales de comunicación.</p>
<p>El Usuario podrá conocer los datos registrados y ejercer los derechos de rectificación,
actualización o supresión de estos gratuitamente comunicándose con Macrosolutions S.A.
al teléfono +54 9 11 23765493 o mediante correo electrónico dirigido a
clientes@macrosolutions.com.ar. Macrosolutions se ha adaptado a los estándares técnicos
y de seguridad habituales para la protección de los datos tratados, promoviendo las
medidas que están a su alcance para evitar accesos no autorizados, fugas, perdidas o
transmisión de datos. Sus servidores centrales se encuentran en su sede social de calle 25
de Mayo 431, piso 3° F, CABA, Código Postal C1002ABI.</p>
<p>Macrosolutions asume dar estricta observancia a lo dispuesto por la Ley N° 25326 de
Protección de Datos Personales y asume el carácter de Responsable Inscripto ante la
Dirección Nacional de Protección de Datos Personales. La Dirección Nacional de Protección
de Datos Personales es el Órgano de Control de la Ley N° 25326 y tiene por finalidad la de
atender las denuncias y/o reclamos que se interpongan contra las bases de datos públicas
o privadas ante el incumplimiento a las normas.</p>
<h3>Central de deudores financieros.</h3>
<p>Macrosolutions pone en conocimiento de los Usuarios que es un sujeto registrado ante el
Banco Central de la República Argentina, y que cumple con su obligación de contribuye
mediante el régimen informativo mensual con la “Central de Deudores” dispuesta por la
autoridad de control. El Usuario tendrá acceso a su información actual e histórica mediante
el acceso al sitio web http://www.bcra.gob.ar/BCRAyVos/Situacion_Crediticia.asp. El
Usuario acepta que Macrosolutions no resulta responsable por los datos publicados o
consultados por medio de terceras entidades que recopilen datos de la “Central de
Deudores”.</p>
<h3>Compromiso con el Usuario y el sobreendeudamiento:</h3>
<p>Se informa a los Usuarios y potenciales consumidores que el Banco Central de la República
Argentina dispone de una Gerencia de Protección del Consumidor Financiero que asegura
el derecho a la información mediante la publicación de un Régimen de Transparencia que
permite comparar precios y condiciones de los servicios financieros en el sitio web:
http://www.bcra.gob.ar/BCRAyVos/Regimen_de_transparencia.asp. Para conocer tu
situación crediticia, acceder a la central de cheques rechazados, solicitar información sobre
productos y servicios financieros o enviar consultas y sugerencias el usuario tiene a su
disposición el sitio web: http://www.bcra.gob.ar/BCRAyVos/Usuarios_Financieros.asp.
Macrosolutions asume su compromiso para con los potenciales consumidores y o usuarios,
y aconseja a estos evaluar previamente sus condiciones particulares y su capacidad de pago
previo a la contratación de los servicios que ofrece a través del sitio.</p>
<p>El Sobreendeudamiento del consumidor es un flagelo derivado de la contratación masiva
de productos o servicios financieros por parte del consumidor o su familia, derivando en la
imposibilidad del consumidor (persona física no comerciante) de hacer frente a todas sus
deudas actuales y/o futuras en un tiempo razonable y acorde a su capacidad de pago actual.
Ley aplicable y jurisdicción.</p>
<p>El Usuario denuncia sus medios de contacto y domicilios donde serán válidas todas las
notificaciones enviadas por Macrosolutions, y acepta la plena validez de las notificaciones
que se cursaren por vía telefónica, email, SMS, Whats App y otros medios similares. Para
todos los efectos de la presente contratación, las partes se someterán a la competencia de
la Justicia Nacional en lo Comercial de la Capital Federal, comprometiéndose a no efectuar
excepciones o solicitudes de competencia de otros tribunales. La presente competencia
será obligatoria para las partes, salvo que por ley se establezca una diferente.
Otras disposiciones.</p>
<p>1.- La propiedad intelectual del sitio web, el simulador y el contenido de este pertenecen a
Macrosolutions SA, incluyendo la marca comercial, los logos e isologos, diseños, dibujos,
estudios, e implementaciones tecnológicas. En consecuencia, todo lo comprendido en
cuestiones de visibilidad, accesibilidad y contenido como su software se encuentra
protegido por las leyes de propiedad intelectual, de autor, marcas o patentes.</p>
<p>2.- Macrosolutions se reserva el derecho a modificar o actualizar los términos y condiciones
en cualquier momento ajustándose al nuevo giro comercial, políticas de riesgo,
requerimientos legales, técnicos o tecnológicos como así ante toda circunstancia que a
criterio de Macrosolutions requiera una actualización. Los cambios serán aplicados e
informados en este documento. Si el Usuario continúa navegando el sitio, o utilizando los
servicios provistos por el mismo implica e importa la aceptación y el consentimiento del
usuario de todas las nuevas disposiciones.</p>
<p>3.- Macrosolutions no asume responsabilidades adicionales con relación a: (i) Publicidad
que terceros pudieran realizar y en la cual se contenga información del sitio, vínculos o
hipervínculos con el mismo, (ii) Daños o perjuicios derivados de fallas del sistema, servidor
o servicio de internet contratados o utilizados por el Usuario al momento de acceder al sitio,
(iii) Por malas interpretaciones que pudiera realizar el Usuario, como por usos indebidos o
actos de terceros por los cuales no esté obligada a responder.</p>
<p>4.- Se prohíbe la copia, duplicación, comercialización, redistribución o cualquier otra
actividad similar sobre los contenidos y servicios del sitio sin la correspondiente
autorización y citando las fuentes. Salvo pacto en contrario por escrito.</p>
<p>5.- Ante la eventualidad de que alguna parte o cláusula del presente documento sea declara
nula por autoridad competente, ello no significara la extensión de las obligaciones del
usuario ni afectara en modo alguno a las demás disposiciones de estos términos y
condiciones que continuaran con su vigencia.</p>
      `,
      content_politica: `<h3>Políticas de Privacidad y Protección de Datos Personales.</h3>
    <p>El presente documento contiene las Políticas de Privacidad y Protección de Datos
Personales de MACROSOLUTIONS S.A. desarrolladas para su aplicación móvil (en adelante
“la empresa” y “la aplicación” respectivamente).</p>
<p>Es usted (en adelante, el “Usuario”) responsable leer, entender y aceptar todas las Políticas
de Privacidad y Protección de Datos Personales. Con carácter de previo a utilizar la
aplicación deberá haber leído, comprendido y aceptado las Políticas de Privacidad y
Protección de Datos Personales como así los Términos y Condiciones establecidos por
MACROSOLUTIONS S.A.</p>
<p>Para utilizar la aplicación, es condición necesaria y esencial que proceda a realizar su
registro ante la empresa y en ningún caso se registrarán a personas jurídicas o personas
físicas sin capacidad legal para contratar o que no cumplan con los requisitos establecidos
en los Términos y Condiciones.</p>
<p>El Usuario que experimente problemas o que tenga preguntas sobre el uso de la aplicación
puede comunicarse con MACROSOLUTIONS S.A. al teléfono +54 9 11 23765493 o por medio
del correo electrónico: clientes@macrosolutions.com.ar</p>
<h3>Formulario de datos y uso de la cámara. Verificación de datos.</h3>
<p>Al utilizar la aplicación, se deberá suministrar datos personales del usuario y/o de
potenciales consumidores con el carácter de declaración jurada. Los datos por suministrar
son los esenciales para el correcto funcionamiento de la aplicación y para poder definir un
perfil crediticio, pudiendo ser solicitados datos tales como: nombre, apellido, fecha de
nacimiento, tipo de documento, número de documento, sexo, dirección de correo
electrónico y número de celular. La aplicación podrá requerir, además, el uso de la cámara
de los dispositivos móviles, para lo cual el usuario podrá enviar fotografías conforme a las
indicaciones de la aplicación y a los fines de acreditar su identidad.</p>
<p>Él envió de los datos de los datos por parte del usuario y/o los potenciales consumidores
supone el conocimiento y aceptación de las presentes políticas.</p>
<p>Con el hecho de haber enviado los datos personales, el usuario y/o los potenciales
consumidores garantizan y responden en cualquier caso por la veracidad, exactitud,
vigencia y autenticidad de los datos facilitados. Sin perjuicio de ello, el usuario y/o los
potenciales consumidores autorizan expresamente a MACROSOLUTIONS S.A. a confirmar
los datos suministrados, pudiendo realizar consultas ante bancos de datos públicos o privados, compañías especializadas, bureau de crédito o centrales de riesgo. La empresa
garantiza que la información que se obtenga de estas entidades será tratada en forma
confidencial y empleada con fines profesionales.</p>
<h3>Conservación de los datos y usos.</h3>
<p>MACROSOLUTIONS S.A. no revelará ni compartirán la información suministrada por el
usuario y/o potenciales consumidores, en oportunidad de la carga de datos en la aplicación,
con ninguna otra persona física o jurídica sin el consentimiento informado del titular de la
información salvo que así lo requiera la autoridad administrativa o judicial competente.
Asimismo, la empresa declara que hará sus máximos esfuerzos para proteger la privacidad
de la información suministrada por el Usuario.</p>
<p>Salvo indicación expresa en contrario por el Usuario y/o los potenciales consumidores, la
empresa podrá utilizar la información suministrada para enviar información o mensajes
sobre promociones, nuevas funcionalidades, o nuevos servicios, de interés para el usuario.</p>
<h3>Sobre la Protección de los Datos.</h3>
<p>MACROSOLUTIONS S.A. dispone de tecnología adecuada y acorde a las buenas prácticas de
la industria para la recolección de datos, su tratamiento, almacenamiento y protección. Bajo
ningún caso, la empresa resultara responsable por intercepciones ilegales o violación de sus
sistemas o bases de datos por parte de personas no autorizadas, así como por la indebida
utilización de la información obtenida por esos medios.</p>
<p>El Usuario tiene la facultad de ejercer el derecho de acceso a sus datos personales,
almacenados en por la aplicación, en forma gratuita a intervalos no inferiores a seis (6)
meses, salvo que acredite un interés legítimo al efecto conforme lo establecido en el
artículo 14 inciso 3 de la Ley N° 25.326. LA DIRECCION NACIONAL DE PROTECCION DE DATOS
PERSONALES, Órgano de Control de la Ley N° 25.326.</p>
<p>Ante el supuesto de baja calificación o rechazos de los perfiles propuestos a la aplicación,
el usuario y/o los potenciales consumidores tienen derecho a conocer el motivo y la fuente
con la cual se corroboro la información crediticia de forma gratuita por parte de la empresa
conforme al artículo 1387 del Código Civil y Comercial de la Nación.</p>
<h3>Información sobre el uso.</h3>
<p>MACROSOLUTIONS S.A. podrá recabar y almacenar cierta información sobre la actividad del
Usuario dentro de la aplicación. Tal información será utilizada para la elaboración de
informes y estadísticas propias que permitan el desarrollo de nuevos productos. También
la aplicación podrá almacenar la información suministrada por el Usuario que considere
relevante para el enriquecimiento de sus propias bases con fines publicitarios. El usuario
autoriza a MACROSOLUTIONS S.A. a la utilización de cookies como de su dirección IP para ayudar a diagnosticar problemas con los servidores propios y administrar eficientemente la
aplicación.</p>
<h3>Suspensiones o inhabilitaciones de usuarios.</h3>
<p>MACROSOLUTIONS S.A. podrá, a su sólo arbitrio, suspender o inhabilitar definitivamente al
usuario en el caso de sospecha de que utilice las aplicaciones o servicios con cualquier otro
fin distinto al previsto, renunciando expresamente el Usuario a todo reclamo a
consecuencia de tal suspensión o inhabilitación temporal o definitiva. La información
proporcionada en la registración por el Usuario, las modificaciones debidamente
producidas y/o informadas por el Usuario a tal información, y la demás información que, a
criterio de MACROSOLUTIONS S.A., se estime conveniente proteger es, y será, resguardada
por MACROSOLUTIONS S.A. con sistemas de protección estándar de la industria y de
protección de contraseñas, de conformidad con la normativa aplicable en materia de
medidas de seguridad aplicables a la información personal.</p>
<h3>Modificaciones a estas políticas.</h3>
<p>Las presentes Políticas de Privacidad y Protección de Datos Personales se actualizaron el
01/02/2021 y MACROSOLUTIONS S.A. se reserva el derecho de modificarlas en parte o en
un todo en cualquier momento.</p>
<p>Cualquier cambio será realizado se reflejará en este documento, constando la fecha de la
última actualización, para lo cual los usuarios y potenciales consumidores deberán dar
lectura con periodicidad diligente a las presentes políticas. Con la registración y uso de la
aplicación el usuario y los potenciales consumidores aceptan estas políticas y los cambios
que se hicieren a las mismas sin derecho alguno a reclamar por ello.</p>
    `

    };
  },
  methods: {

    onMacro () {
      // eslint-disable-next-line no-console
      //console.log(['onSimu)'])
      this.$router.push({ name: "BarIndex" })
        .catch(() => { })
    },
  }
};
</script>




<style>
@font-face {
  font-family: "Nunito";
  src: url("../assets/fonts/Nunito-Regular.ttf");
}

body {
  margin: 0 auto;
  overflow: hidden; /* Hide scrollbars */
}

#app-bar-ali {
  /* background-image: -webkit-linear-gradient(0deg, #3c96ff 0%, #2dfbff 100%) !important; */
  background-image: -webkit-linear-gradient(
    0deg,
    #b4e081e5 0%,
    hsl(128, 31%, 67%) 100%
  ) !important;
}

#app-bar-ali a {
  font-size: 14px;
  text-transform: uppercase !important;
}

#app-bar-ali h3 {
  font-size: 18px;
  font-family: "Nunito";
  font-weight: 500;

  text-decoration: none !important;
  padding: 5px;
  color: #ffffff;
  text-align: center;
  text-transform: none !important;
}
#app-bar-ali h3 strong {
  font-style: italic;
  font-size: 16px;
}

#menuali a {
  text-decoration: none !important;
  color: black !important;
  font-family: "Nunito";
}

@media only screen and (max-width: 600px) {
  #social {
    display: none;
  }

  #logo {
    width: 90%;
  }
}

#alianza {
  font-family: "Nunito" !important;
  background-image: -webkit-linear-gradient(
    0deg,
    #b4e081e5 0%,
    hsl(128, 31%, 67%) 100%
  ) !important;
}
#no-background-hover::before {
  background-color: transparent !important;
}

.theme--light.v-tabs > .v-tabs-bar {
  background-color: transparent !important;
}
</style>


<style lang="sass">
#home-app-bar
.v-tabs-slider
  max-width: 24px
  margin: 0 auto

  .v-tab
    &::before
      display: none
</style>

<style lang="scss">
#no-background-hover::before {
  background-color: transparent !important;
}
</style>