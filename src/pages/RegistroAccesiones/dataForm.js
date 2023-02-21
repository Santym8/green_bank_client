import * as Yup from "yup";
export const formInitialValues = {
  usuarioId: null,

  nombreLocalId: null,
  subespecieId: null,
  especieId: null,
  generoId: null,
  familiaId: null,

  estadoAccesionId: null,

  recoleccionNombre: null,
  recoleccionApellidos: null,
  recoleccionFecha: null,
  institutoColectorId: null,

  ubicacionRecoleccionGrupoEtnico: null,
  ubicacionRecoleccionGrupoIdioma: null,
  ubicacionRecoleccionGrupoPais: null,
  ubicacionRecoleccionGrupoProvincia: null,
  ubicacionRecoleccionGrupoCanton: null,
  ubicacionRecoleccionGrupoParroquia: null,
  ubicacionRecoleccionGrupoLocalidad: null,
  ubicacionRecoleccionGrupoNombrePredio: null,
  ubicacionRecoleccionGrupoPropietario: null,
  ubicacionRecoleccionGrupoLocalizacion: null,
  ubicacionRecoleccionGrupoLatitud: null,
  ubicacionRecoleccionGrupoLongitud: null,
  ubicacionRecoleccionGrupoAltitud: null,

  sueloDetalleTextura: null,
  sueloDetallePedregosidad: null,
  drenajeSueloId: null,
  colorSueloId: null,
  pedregosidadId: null,
  texturaSueloId: null,
  erosionSueloId: null,

  climaTemperatura: null,
  climaHumedad: null,
  luzId: null,

  terrenoDetallesTopografia: null,
  terrenoDetallesFisiografia: null,
  terrenoDetallesVegetacion: null,
  terrenoDetallesFormaGeografica: null,
  terrenoAspectoPendienteNorte: null,
  terrenoAspectoPendienteSur: null,
  terrenoAspectoPendienteEste: null,
  terrenoAspectoPendienteOeste: null,
  topografiaId: null,
  fisiografiaId: null,
  vegetacionAlrededorId: null,
  formaGeograficaId: null,
  formaPendienteId: null,

  fechaSiembra: null,
  fechaFloracion: null,
  fechaFructificacion: null,
  fechaCosechas: null,

  informacionDetallesEstado: null,
  informacionDetallesFuenteColeccion: null,
  informacionDetallesTipoMuestraColectada: null,
  informacionPoblacionAislada: false,
  informacionCultivosCerca: false,
  informacionPlantasMuestradas: null,
  informacionAreaMuestrada: null,
  informacionUsoMaterial: null,
  informacionDetallePartePlantaUtilizada: null,
  informacionEjemplarHerbario: true,
  informacionDetallePracticaCultural: null,
  informacionAsociasionEspeciesSilvestres: null,
  informacionPlagasEnfermedades: null,
  estadoGermoplasmaId: null,
  fuenteColeccionId: null,
  tipoMuestraColectadaId: null,
  partePlantaUtilizadaId: null,
  metodoMuestreoId: null,
  practicaCulturalId: null,
  frecuenciaMuestraId: null,
  estadoFenologicoPoblacionId: null,
  usoMaterialId: null,

  observacionContenido: null,

  fotos: null,
};

export const validacionDatos = {
  nombreLocalId: Yup.number().required("Se requiere el nombre local"),
};
