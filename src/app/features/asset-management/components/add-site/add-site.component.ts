import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { assetsStore } from '../../store/assets.store';

export type State = {
  name: string;
  lgas: string[];
}


@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrl: './add-site.component.scss'
})
export class AddSiteComponent {

  selectedState: string = "";
  states: Array<State> = [
    {
      "name": "Abia",
      "lgas": [
        "Aba North",
        "Aba South",
        "Arochukwu",
        "Bende",
        "Ikwuano",
        "Isiala Ngwa North",
        "Isiala Ngwa South",
        "Isuikwuato",
        "Obi Ngwa",
        "Ohafia",
        "Osisioma",
        "Umuahia North",
        "Umuahia South",
        "Umuche"
      ]
    },
    {
      "name": "Adamawa",
      "lgas": [
        "Demsa",
        "Fufore",
        "Ganye",
        "Girki",
        "Girei",
        "Hong",
        "Jada",
        "Maiha",
        "Mayo Belwa",
        "Michika",
        "Mubi North",
        "Mubi South",
        "Numan",
        "Shelleng",
        "Song",
        "Toungo",
        "Yola North",
        "Yola South"
      ]
    },
    {
      "name": "Akwa Ibom",
      "lgas": [
        "Abak",
        "Esit Eket",
        "Ibeno",
        "Ibesikpo Asutan",
        "Ibiono Ibom",
        "Ikot Abasi",
        "Ikot Ekpene",
        "Ini",
        "Itu",
        "Eket",
        "Mkpat Enin",
        "Nsit Atai",
        "Nsit Ubium",
        "Obio Akpa",
        "Okobo",
        "Onna",
        "Oron",
        "Ukanafun",
        "Uruan",
        "Uyo"
      ]
    },
    {
      "name": "Anambra",
      "lgas": [
        "Aguata",
        "Anambra East",
        "Anambra West",
        "Anaocha",
        "Awka North",
        "Awka South",
        "Ayamelum",
        "Dunukofia",
        "Ekwusigo",
        "Idemili North",
        "Idemili South",
        "Ihiala",
        "Njikoka",
        "Nnewi North",
        "Nnewi South",
        "Ogbaru",
        "Onitsha North",
        "Onitsha South",
        "Orumba North",
        "Orumba South",
        "Oyi"
      ]
    },
    {
      "name": "Bayelsa",
      "lgas": [
        "Brass",
        "Ekeremor",
        "Kolokuma/Opokuma",
        "Nembe",
        "Sagbama",
        "Southern Ijaw",
        "Yenagoa"
      ]
    },
    {
      "name": "Bauchi",
      "lgas": [
        "Bauchi",
        "Bogoro",
        "Dambin",
        "Darazo",
        "Dass",
        "Gamawa",
        "Ganjuwa",
        "Giade",
        "Itas-Gadau",
        "Katagum",
        "Kirfi",
        "Misau",
        "Ningi",
        "Shira",
        "Tafawa Balewa",
        "Toro",
        "Warji",
        "Zaki"
      ]
    },
    {
      "name": "Benue",
      "lgas": [
        "Agatu",
        "Apa",
        "Buruku",
        "Gboko",
        "Guma",
        "Gwer East",
        "Gwer West",
        "Konshisha",
        "Katsina-Ala",
        "Logo",
        "Makurdi",
        "Obi",
        "Ogbadibo",
        "Okpokwu",
        "Oju",
        "Otukpo",
        "Tarkaa",
        "Vandekiya"
      ]
    },{
      "name": "Borno",
      "lgas": [
        "Abadam",
        "Askira/Uba",
        "Bama",
        "Chibok",
        "Dikwa",
        "Guubio",
        "Gubio",
        "Kaga",
        "Kala/Balge",
        "Konduga",
        "Magumeri",
        "Maiduguri",
        "Marte",
        "Mobbar",
        "Monguno",
        "Ngala",
        "Nganzai",
        "Dikwa",
        "Guubio",
        "Kaga",
        "Kala/Balge"
      ]
    },
    {
      "name": "Cross River",
      "lgas": [
        "Akamkpa",
        "Akpabuyo",
        "Bakassi",
        "Bekwara",
        "Biasi",
        "Calabar Municipality",
        "Calabar South",
        "Etung",
        "Ikom",
        "Obanliku",
        "Obudu",
        "O Calabar",
        "Yakuur"
      ]
    },
    {
      "name": "Delta",
      "lgas": [
      "Aniocha North",
      "Aniocha South",
      "Bomadi",
      "Burutu",
      "Ethiope East",
      "Ethiope West",
      "Ika North East",
      "Ika South",
      "Isoko North",
      "Isoko South",
      "Ndokwa East",
      "Ndokwa West",
      "Oshimili North",
      "Oshimili South",
      "Patani",
      "Sapele",
      "Udu",
      "Ughelli North",
      "Ughelli South",
      "Ukwaani",
      "Uvwie",
      "Warri North",
      "Warri South",
      "Warri South West"
      ]
      },
      {
        "name": "Ebonyi",
        "lgas": [
        "Abakaliki",
        "Afikpo North",
        "Afikpo South",
        "Ebonyi",
        "Ezza North",
        "Ezza South",
        "Ishielu",
        "Ivo",
        "Izzi",
        "Ohaozara"
        ]
        },
        {
          "name": "Ekiti",
          "lgas": [
          "Ado Ekiti",
          "Aiye Ekiti",
          "Ekiti East",
          "Ekiti South West",
          "Ekiti West",
          "Emure",
          "Gbonyin",
          "Ido Osi",
          "Ijero",
          "Ikere",
          "Ikole",
          "Ilejemeje",
          "Irepodun",
          " Ise/Orun",
          "Mopa Amuro",
          "Oye"
          ]
          },
          {
            "name": "Enugu",
            "lgas": [
            "Aninri",
            "Awgu",
            "Enugu East",
            "Enugu North",
            "Enugu South",
            "Ezeagu",
            "Isi Uzo",
            "Nkanu West",
            "Nsukka",
            "Opi",
            "Udenu",
            "Udi",
            "Igbo Etiti"
            ]
            },
            {
              "name": "Abuja",
              "lgas": [
                "Abaji",
                "Abuja Municipal",
                "Bwari",
                "Gwagwalada",
                "Kuje",
                "Kwali"
              ]
            },
            {
              "name": "Gombe",
              "lgas": [
              "Akko",
              "Balewa",
              "Billiri",
              "Kaltungo",
              "Kanam",
              "Kwami",
              "Nafada",
              "Shanga",
              "Tangale",
              "Yamaltu Deba"
              ]
            },
              {
                "name": "Imo",
                "lgas": [
                "Aboh Mbaise",
                "Ahiazu Mbaise",
                "Ehime Mbano",
                "Ezinifite",
                "Fangene",
                "Ideato North",
                "Ideato South",
                "Iguikota",
                "Ikeduru",
                "Isiala Mbano",
                "Isu",
                "Mbaitoli",
                "Ngor Okpala",
                "Njaba",
                "Nkwerre",
                "Nwangele",
                "Obowo",
                "Oguta",
                "Ohaji/Egbema",
                "Okigwe",
                "Onuimo"
                ]
              },
              {
                "name": "Jigawa",
                "lgas": [
                  "Auyo",
                  "Babura",
                  "Birnin Kudu",
                  "Buji",
                  "Dutse",
                  "Gagarawa",
                  "Guri",
                  "Gwaram",
                  "Hadejia",
                  "Jahun",
                  "Kafin Hausa",
                  "Kaugama",
                  "Kazaure",
                  "Maiadi",
                  "Malam Madori",
                  "Miga",
                  "Ringim",
                  "Sanyin Kara",
                  "Sule Tankarkar",
                  "Taura",
                  "Kirikasamma",
                  "Guri",
                  "Kungu",
                  "Basawa",
                  "Itas Gadabi",
                  "Maifa",
                  "Zango"
                ]
              },
              {
                "name": "Kaduna",
                "lgas": [
                  "Birnin Gwari",
                  "Chikun",
                  "Giwa",
                  "Igabi",
                  "Jere",
                  "Kaduna North",
                  "Kaduna South",
                  "Kajuru",
                  "Kauru",
                  "Kubau",
                  "Kudan",
                  "Ikara",
                  "Makarfi",
                  "Sabon Gari",
                  "Sanga",
                  "Soba",
                  "Zangon Kataf"
                ]
              },
              {
                "name": "Kano",
                "lgas": [
                  "Ajingi",
                  "Albasu",
                  "Bagwai",
                  "Bebeji",
                  "Bichi",
                  "Bunkure",
                  "Dala",
                  "Doguwa",
                  "Fagge",
                  "Gabasawa",
                  "Garun Mallam",
                  "Gezawa",
                  "Gwale",
                  "Kano Municipal",
                  "Karaye",
                  "Kibiya",
                  "Kiru",
                  "Kumbotso",
                  "Kura",
                  "Madobi",
                  "Makoda",
                  "Minjibir",
                  "Nasarawa",
                  "Rano",
                  "Roma",
                  "Sanusi",
                  "Sumaila",
                  "Takai",
                  "Tarauni",
                  "Tofa",
                  "Ungogo",
                  "Warawa",
                  "Wudil"
                ]
              },
              {
                "name": "Katsina",
                "lgas": [
                  "Batagarawa",
                  "Batsari",
                  "Daura",
                  "Dutsi",
                  "Faskari",
                  "Funtua",
                  "Ingawa",
                  "Jibia",
                  "Kaita",
                  "Kankia",
                  "Katsina",
                  "Kurfi",
                  "Maiadua",
                  "Malumfashi",
                  "Mani",
                  "Mashi",
                  "Matazu",
                  "Musawa",
                  "Rimi",
                  "Sandamu",
                  "Sankara",
                  "Zango"
                ]
              },
              {
                "name": "Kebbi",
                "lgas": [
                  "Aleiro",
                  "Arewa",
                  "Augie",
                  "Bagudo",
                  "Birnin Kebbi",
                  "Bunza",
                  "Dandi",
                  "Danko/Wasagu",
                  "Fakai",
                  "Gwandu",
                  "Jega",
                  "Kalgo",
                  "Kaura Namoda",
                  "Kebbi",
                  "Maiyama",
                  "Ngaski",
                  "Sakaba",
                  "Shanga",
                  "Suru",
                  "Wasagu/Danko"
                ]
              },
              {
                "name": "Kogi",
                "lgas": [
                  "Adavi",
                  "Ajaokuta",
                  "Ankpa",
                  "Bassa",
                  "Dekina",
                  "Ibaji",
                  "Idah",
                  "Igalamela Odolu",
                  "Ijumu",
                  "Kabba/Bunu",
                  "Kogi",
                  "Koto Karfi",
                  "Lokoja",
                  "Okene",
                  "Olamaboro",
                  "Omala",
                  "Okehi",
                  "Ogori/Magongo",
                  "Yagba East",
                  "Yagba West"
                ]
              },
              {
                "name": "Kwara",
                "lgas": [
                  "Asa",
                  "Baruten",
                  "Ekiti",
                  "Ibadan",
                  "Ilorin East",
                  "Ilorin South",
                  "Ilorin West",
                  "Isin",
                  "Kaiama",
                  "Kankain",
                  "Moro",
                  "Offa",
                  "Oke Ero",
                  "Oyun",
                  "Pategi"
                ]
              },
              {
                "name": "Lagos",
                "lgas": [
                  "Agege",
                  "Ajeromi-Ifelodun",
                  "Alimosho",
                  "Amuwo-Odofin",
                  "Apapa",
                  "Badagry",
                  "Epe",
                  "Eti-Osa",
                  "Ifako-Ijaiye",
                  "Ikeja",
                  "Ikorodu",
                  "Kosofe",
                  "Lagos Island",
                  "Lagos Mainland",
                  "Mushin",
                  "Oshodi-Isolo",
                  "Shomolu",
                  "Surulere"
                ]
              },
              {
                "name": "Nasarawa",
                "lgas": [
                  "Akwanga",
                  "Doma",
                  "Karu",
                  "Keana",
                  "Keffi",
                  "Kokona",
                  "Lafia",
                  "Nasarawa",
                  "Nasarawa Egon",
                  "Obi",
                  "Toto",
                  "Wamba"
                ]
              },
              {
                "name": "Niger",
                "lgas": [
                  "Agaie",
                  "Agwara",
                  "Bida",
                  "Borgu",
                  "Chanchaga",
                  "Edati",
                  "Gbako",
                  "Gurara",
                  "Kontagora",
                  "Lapai",
                  "Lavun",
                  "Magama",
                  "Mariga",
                  "Mashegu",
                  "Mokwa",
                  "Paikoro",
                  "Rafi",
                  "Shiroro",
                  "Suleja",
                  "Tafa"
                ]
              },
              {
                "name": "Ogun",
                "lgas": [
                  "Abeokuta South",
                  "Ado-Odo/Ota",
                  "Egbado North",
                  "Egbado South",
                  "Ewekoro",
                  "Ifo",
                  "Ijebu East",
                  "Ijebu North",
                  "Ijebu North East",
                  "Ijebu Ode",
                  "Ikenne",
                  "Imeko Afon",
                  "Ipokia",
                  "Odogbolu",
                  "Ogun Waterside",
                  "Remo North",
                  "Remo South",
                  "Shagamu"
                ]
              },
              {
                "name": "Ondo",
                "lgas": [
                  "Akoko North East",
                  "Akoko North West",
                  "Akoko South Akure",
                  "Akoko South West",
                  "Akure North",
                  "Akure South",
                  "Ese Odo",
                  "Idanre",
                  "Ifedore",
                  "Ilaje",
                  "Ile Oluji/Okeigbo",
                  "Irele",
                  "Ondo East",
                  "Ondo West",
                  "Ose",
                  "Owo"
                ]
              },
              {
                "name": "Osun",
                "lgas": [
                  "Atakunmosa East",
                  "Atakunmosa West",
                  "Boluwaduro",
                  "Boripe",
                  "Ife Central",
                  "Ife East",
                  "Ife North",
                  "Ife South",
                  "Egbedore",
                  "Ejigbo",
                  "Ifeoluwa",
                  "Ilesa East",
                  "Ilesa West",
                  "Irepodun",
                  "Iwo",
                  "Isokan",
                  "Itesiwaju",
                  "Obokun",
                  "Oriade",
                  "Osogbo"
                ]
              },
              {
                "name": "Oyo",
                "lgas": [
                  "Afijio",
                  "Akinyele",
                  "Atiba",
                  "Attakisese",
                  "Ibadan North East",
                  "Ibadan North West",
                  "Ibadan North",
                  "Ibadan South East",
                  "Ibadan South West",
                  "Ibadan Central",
                  "Ibarapa Central",
                  "Ibarapa East",
                  "Ibarapa North",
                  "Ibarapa South",
                  "Ibarapa West",
                  "Ibadan/Oluyole",
                  "Irepo",
                  "Kajola",
                  "Lagelu",
                  "Ogbomosho North",
                  "Ogbomosho South",
                  "Ogo Oluwa",
                  "Oluyole",
                  "Ona Ara",
                  "Orelope",
                  "Oriade",
                  "Oyo East",
                  "Oyo West",
                  "Surulere"
                ]
              },
              {
                "name": "Plateau",
                "lgas": [
                  "Barkin Ladi",
                  "Bassa",
                  "Bokkos",
                  "Jos East",
                  "Jos North",
                  "Jos South",
                  "Kanam",
                  "Kanke",
                  "Langtang North",
                  "Langtang South",
                  "Mangu",
                  "Mikang",
                  "Pankshin",
                  "Quan Pan",
                  "Shendam",
                  "Wase"
                ]
              },
              {
                "name": "Rivers",
                "lgas": [
                  "Abua/Odual",
                  "Ahoada East",
                  "Ahoada West",
                  "Akuku-Toru",
                  "Andoni",
                  "Asari-Toru",
                  "Bonny",
                  "Brassa",
                  "Eleme",
                  "Emuohia",
                  "Etche",
                  "Gokana",
                  "Ikwerre",
                  "Khana",
                  "Obio/Akpor",
                  "Ogba/Egbema/Ndoni",
                  "Ogu/Bolo",
                  "Opobo/Nkoro",
                  "Port Harcourt",
                  "Tai"
                ]
              },
              {
                "name": "Sokoto",
                "lgas": [
                  "Binji",
                  "Bodinga",
                  "Dange-Shuni",
                  "Gada",
                  "Goronyo",
                  "Gudu",
                  "Illela",
                  "Isa",
                  "Kebbe",
                  "Kware",
                  "Rabah",
                  "Sabon Birni",
                  "Shagari",
                  "Silame",
                  "Sokoto North",
                  "Sokoto South",
                  "Tambuwal",
                  "Tureta",
                  "Wamakko",
                  "Wurno"
                ]
              },
              {
                "name": "Taraba",
                "lgas": [
                  "Ardo Kola",
                  "Bali",
                  "Donga",
                  "Gashaka",
                  "Gassol",
                  "Ibi",
                  "Jalingo",
                  "Kurmi",
                  "Sardauna",
                  "Shonga",
                  "Takum",
                  "Ussa",
                  "Wukari",
                  "Zing"
                ]
              },
              {
                "name": "Yobe",
                "lgas": [
                  "Bade",
                  "Bursari",
                  "Damaturu",
                  "Fika",
                  "Fune",
                  "Geidam",
                  "Gujba",
                  "Jakusko",
                  "Karasuwa",
                  "Machina",
                  "Nangere",
                  "Nguru",
                  "Potiskum",
                  "Tarmuwa",
                  "Yunusari",
                  "Yusufari"
                ]
              },
              {
                "name": "Zamfara",
                "lgas": [
                  "Anka",
                  "Bakura",
                  "Bungudu",
                  "Gumumi",
                  "Gusau",
                  "Maradun",
                  "Maru",
                  "Shinkafi",
                  "Talata Mafara",
                  "Tsafe",
                  "Zurmi"
                ]
              }
  ]

  private fb = inject(FormBuilder);
  store = inject(assetsStore);

  newSiteForm = this.fb.group({
    name: ['', [Validators.required]],
    code: ['', [Validators.required]],
    location: this.fb.group({
      streetAddress: [''],
      lga: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: [''],
      longitutde: [0],
      latitude: [0]
    }),
    totalArea: [0]
  });

  getLGAs(state: string): undefined|State {
    const foundState = this.states.find(x => x.name === this.selectedState);
    return foundState;
  }

  submit(): void {

  }

}
