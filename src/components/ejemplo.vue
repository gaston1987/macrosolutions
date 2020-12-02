            </v-card-text>
            
            <v-card-actions>
               <v-chip
                color="#651ec9"
                text
                @click="onReservas"
                >
              <span style="color:white">  Reservar</span>
              </v-chip>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
    </v-card>

  </v-container>
</template>

<script>
export default {
  name: 'Destacados',
  data: () => ({
    loading: false,

  }),

  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)


    },
    onReservas () {
      // eslint-disable-next-line no-console
      console.log(['onReservas()'])

      this.$router.push({ name: "Reservas_index" })
        .catch(() => { })
    }
  },
}
</script>


<style >
.title1{
  font-size: 30px !important;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 34px; 
  font-weight: 500;

    }
</style>
