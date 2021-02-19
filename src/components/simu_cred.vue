<template>
  <v-main id="simu">

    <v-card
      elevation="10"
      id="simucard"
      class="mx-auto mt-0 mb-20"
      v-if="modo=='calculador'"
      outlined
      rounded
      flat
      light
      width="80%"
      mt-1
    >
      <v-system-bar
        :color="ex2.color"
        dark
      >
        <v-spacer></v-spacer>
      </v-system-bar>
      <v-card-title class="text-center font-weight-black">
        ¡Sacá tu crédito 100% online!
        <!-- 
        <v-icon
          class="hidden-md-and-down"
          style="color:green; padding-left:5px; font-size:40px"
        >mdi-currency-usd-circle</v-icon>
        <v-icon
          class="hidden-md-and-down"
          style="color:green; padding-left:5px; font-size:40px"
        >mdi-currency-usd-circle</v-icon>
        <v-icon
          class="hidden-md-and-down"
          style="color:green; padding-left:5px; font-size:40px"
        >mdi-currency-usd-circle</v-icon>
        -->

      </v-card-title>

      <v-divider></v-divider>

      <v-slider
        v-model="ex1.val"
        @change="calCuo"
        :thumb-color="ex2.color"
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

      </v-slider>

      <v-slider
        v-model="ex2.val"
        :thumb-color="ex2.color"
        thumb-label="always"
        @change="calCuo"
        :label="ex2.label"
        track-color="green"
        height="50"
        thumb-size="50"
        :tick-labels="$vuetify.breakpoint.mobile ? [] :cuotasLabel"
        step="3"
        max="24"
        min="3"
        ticks
      >

      </v-slider>

      <div class="d-flex">
        <p
          v-if="impcuo!=0"
          class="font-weight-black"
          id="valor"
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
      <div v-if="impcuo!=0">
        <p style="font-size: 10px">
          *Cuota aproximada para préstamos personales para consumo, Plazo de validez de simulación 7 días. La mismas está sujeta a verificación comercial y crediticia del departamento de créditos (1). Tasa fija en pesos, Sistema de amortización francés, las tasas de interés mínimas son las siguientes TNA: 82,44%. TEA: CFT: y las tasas de interés máxima son las siguientes TNA: 82,44%. TEA: CFT:
        </p>

        <table>
          <tr>
            <th></th>
            <th><strong>TNA</strong></th>
            <th><strong>TEA</strong></th>
            <th><strong>CFT</strong></th>
          </tr>
          <tr>
            <td><strong>Tasa Mínima</strong></td>
            <td>108%</td>
            <td>181.27%</td>
            <td>219%</td>
          </tr>
          <tr>
            <td><strong>Tasa Máxima</strong></td>
            <td>216%</td>
            <td>628.76%</td>
            <td>761%</td>
          </tr>
        </table>

        <p style="font-size: 10px">
          El costo financiero total nominal anual incluye capital, intereses, comisión de originación e IVA. Los impuestos nacionales y provinciales estarán a cargo del cliente.
        </p>
        <p style="font-size: 10px">
          (1) En el supuesto de rechazo uds. puede solicitar el informe según el articulo 1387 del Código Civil y Comercial de la Nación.
        </p>

      </div>
    </v-card>

    <v-card
      elevation="10"
      id="simucard"
      class="mx-auto mt-0 mb-20"
      v-if="modo=='datero'"
      outlined
      rounded
      flat
      light
      width="80%"
      mt-1
    >
      <v-system-bar
        color="#2C1F77"
        dark
      >
        <v-spacer></v-spacer>
      </v-system-bar>
      <v-card-title class="text-center font-weight-black">

        INGRESA TUS DATOS

        <v-icon style="color:#2C1F77; padding-left:10px; font-size:30px">mdi-form-select</v-icon>
      </v-card-title>

      <v-divider></v-divider>

      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >

        <v-text-field
          v-model="form['dni']"
          class="py-5 pr-10 pl-10"
          dense
          :counter="8"
          type="number"
          label="Nro.DNI."
          :rules="dniRules"
          clearable
          filled
          required
        ></v-text-field>

        <v-text-field
          v-model="form['name']"
          class="pr-10 pl-10"
          dense
          :rules="nameRules"
          label="Apellido y Nombre"
          clearable
          filled
          required
        ></v-text-field>

        <v-radio-group
          v-model="form['sexo']"
          row
          required
          class="pl-10"
          v-if="!$vuetify.breakpoint.mobile"
        >
          <template v-slot:label>
            <p style="font-size: 15px;"> <strong>Genero:</strong></p>
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

        <v-select
          v-model="form['sexo']"
          :items="sexo"
          required
          label="Genero"
          dense
          filled
          class="pr-10 pl-10"
          v-if="$vuetify.breakpoint.mobile"
        >

        </v-select>

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
              filled
              required
              class="pr-10 pl-10"
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
              filled
              required
              class="pr-10 pl-10"
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
          class="pr-10 pl-10"
        ></v-text-field>

        <v-text-field
          v-model="form['ingNeto']"
          dense
          type="number"
          prepend-inner-icon="mdi-currency-usd"
          label="Ingreso Mensual Neto"
          clearable
          filled
          required
          class="pr-10 pl-10"
        ></v-text-field>

        <v-checkbox
          class=" pl-10"
          v-model="checkbox"
          :rules="[v => !!v || 'Debes aceptar continuar!']"
          color="green"
        >
          <template v-slot:label>
            <div @click.stop="">
              Acepta los
              <a
                href="#"
                @click.prevent="terms = true"
              >Términos y Condiciones?</a>
            </div>
          </template>
        </v-checkbox>

        <v-row
          align="center"
          justify="center"
        >

          <v-btn
            :disabled="!valid"
            :small="$vuetify.breakpoint.mobile"
            color="success"
            @click="submitForm"
            rounded
          >
            Solicitar Ya!
          </v-btn>

          <v-btn
            color="error"
            :small="$vuetify.breakpoint.mobile"
            @click="reset"
            rounded
          >
            Cancelar
          </v-btn>

          <v-btn
            color="primary"
            :small="$vuetify.breakpoint.mobile"
            @click="modo='calculador'"
            rounded
          >
            Regresa
          </v-btn>
        </v-row>

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
        v-model="dialog"
        hide-overlay
        persistent
        width="300"
      >
        <v-card
          color="primary"
          dark
        >
          <v-card-text>
            Por favor espere
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="conf"
        hide-overlay
        persistent
        width="300"
      >
        <v-card
          color="success"
          dark
        >
          <v-card-title>
            Mensaje enviado con exito!

          </v-card-title>
          <v-card-text>
            Muchas gracias por su consulta, en breve un asesor se comunicará con usted por alguno de los medios brindados

          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="conf = false"
            >
              Cerrar
            </v-btn>

          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>

  </v-main>
</template>
<script>


export default {
  name: 'simu_cred',

  data () {

    return {
      ex1: { label: 'Seleccione Monto', val: 0, color: '#2C1F77' },
      ex2: { label: 'Seleccione Cuotas', val: 0, color: '#2C1F77' },
      form: {
        dni: '',
        tel_area: '',
        tel_nro: '',
        name: '',
        email: '',
        sexo: '',
        ingNeto: '',
      },
      dialog: false,
      valid: true,
      conf: false,
      sexo: [
        'Masculino',
        'Femenino',
        'Otro',
        'Prefiero no decir',
      ],

      dniRules: [
        v => !!v || 'El campo DNI es Obligatorio',
        v => (v && v.length >= 7) || 'La longitud del DNI debe ser mayor a 7 digitos',
        v => (v && v.length > 0) || 'El DNI debe ser mayor a 0',
      ],
      emailRules: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+\..+/.test(v) || 'E-mail debe ser válido',
      ],
      nameRules: [
        v => !!v || 'Nombre es requerido',
        v => (v && v.length >= 10) || 'La longitud del nombre debe ser mayor a 10 caracteres',
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
      tna: 108,
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
    }
  },

  methods: {
    calCuo () {
      var tnm_coef = this.tna / 12 / 100;
      //this.impcuo = this.ex1.val / this.ex2.val
      this.impcuo = this.ex1.val / ((Math.pow((1 + tnm_coef), this.ex2.val) - 1) / (tnm_coef * Math.pow((1 + tnm_coef), this.ex2.val)));
    },

    submitForm () {
      if (!this.$refs.form.validate()) {
        return
      }
      this.dialog = true

      this.sendEmail()

    },

    sendEmail () {
      this.$loadScript("https://smtpjs.com/v3/smtp.js")
        .then(() => {                                         //this Promise return nothing!!!
          window.Email && window.Email.send({
            Host: "mail.macrosolutions.com.ar",
            Username: "web@macrosolutions.com.ar",
            Password: "Dkno198000",
            //SecureToken: "82b06d19-25c4-451d-a485-df6822ea67f8",            
            To: 'administracion@macrosolutions.com.ar',
            From: "web@macrosolutions.com.ar",
            Subject: "Ingreso de datos por Simulador de Crédito:",
            Body: `<html>
                   <table style="border: 1px solid black">
                   <tr>
                   <td><strong>DNI:</strong></td>
                   <td>"${this.form.dni}"</td>
                   </tr>
                   <tr>
                   <td><strong>Apellido y Nombre:</strong></td>
                   <td>"${this.form.name}"</td>
                   </tr>
                   <tr>
                   <td><strong>Telefono:</strong></td>
                   <td>"${this.form.tel_area}-${this.form.tel_nro}"</td>
                   <tr>
                   <td><strong>Email:</strong></td>
                   <td>"${this.form.email}</td>
                   </tr>
                   <tr>
                   <td><strong>Sexo:</strong></td>
                   <td>"${this.form.sexo}"</td>
                   <tr>
                   <td><strong>Ingreso Neto:</strong></td>
                   <td>"${this.form.ingNeto}"</td>
                   </tr>
                   </table>
                   </html>
                   `
          }).then(() => {
            this.dialog = false
            this.conf = true
            this.reset()
          }
          );
        })
        .catch((e) => {
          alert(e)
          this.dialog = false
          // Failed to fetch script
        })
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
  }

}
</script>


<style>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
  font-size: 10px;
}

td {
  background-color: #8bf6ee;
}
th,
td {
  padding: 3px;
}

.v-content .v-card.v-sheet.theme--light {
  border: 5px solid rgb(0, 0, 0) !important;
}

.v-input__slot {
  padding: 10px !important;
  color: black !important;
}

.v-label theme--light {
  color: black !important;
}

#simu {
  font-family: "Nunito" !important;
  margin-bottom: 30px;
}

.d-flex {
  padding: 10px;
}

.d-flex p {
  width: 80% !important;
  font-size: 24px;
}

#valor {
  color: red;
}
</style>