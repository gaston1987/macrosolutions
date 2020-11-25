<template>
  <v-container fluid>

    <v-row>
      <v-col
        cols="12"
        md="4"
      >
        <v-card-title>
          <p class="font-weight-black">
            ¡Sacá tu crédito 100% online!
          </p>
        </v-card-title>
        <v-card
          elevation="24"
          class="mx-auto"
          outlined
        >

          <v-slider
            v-model="ex1.val"
            :thumb-color="ex1.color"
            thumb-label="always"
            height="100"
            thumb-size="50"
            max="120000"
            min="0"
          ></v-slider>
          <v-col cols="12">
            <v-select
              v-model="select2"
              label="Seleccione cantidad de Cuotas"
              outlined
              rounded
              :items="items2"
            ></v-select>
          </v-col>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-container>

              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Nombre"
                required
                rounded
                outlined
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                rounded
                outlined
              ></v-text-field>

              <v-select
                v-model="select"
                :items="items"
                :rules="[v => !!v || 'Campo Requerido']"
                label="Sexo"
                required
                rounded
                outlined
              ></v-select>

              <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'Debes aceptar continuar!']"
                label="Acepta los términos?"
                required
              ></v-checkbox>

              <v-btn
                :disabled="!valid"
                color="primary"
                class="mr-4"
                @click="validate"
                rounded
              >
                Solicitar Ya!
              </v-btn>

              <v-btn
                color="error"
                class="mr-4"
                @click="reset"
                rounded
              >
                Cancelar
              </v-btn>

            </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data () {

    return {
      ex1: { label: 'Monto', val: 0, color: 'blue' },
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Nombre es requerido',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+\..+/.test(v) || 'E-mail debe ser válido',
      ],
      select: null,
      items: [
        'Masculino',
        'Femenino',
        'Otro',
        'Prefiero no decir',
      ],
      checkbox: false,
      select2: null,
      items2: [
        '3',
        '4',
        '5',
        '6',
        '9',
        '12',
        '15',
        '18',
        '21',
        '24',
      ],
    }
  },
  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}
</script>