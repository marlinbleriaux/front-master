// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const SuggestionSubject = {
  "FEEDBACK": "Feedback",
  "SUPPORT": "Support",
  "INQUIRY": "Inquiry",
  "OTHER": "Other"
};

const InfoType = {
  "DIVERS": "DIVERS",
  "COMMUNIQUE": "COMMUNIQUE",
  "ASTUCES_ETUDIANTS": "ASTUCES_ETUDIANTS",
  "MENU_RESTAU": "MENU_RESTAU",
  "BOURSE": "BOURSE",
  "JOB": "JOB",
  "ALERT": "ALERT",
  "SANTE_ET_BIEN_ETRE": "SANTE_ET_BIEN_ETRE",
  "AUTRE": "AUTRE"
};

const TransactionType = {
  "PAYMENT": "PAYMENT",
  "SUGESTION": "SUGESTION",
  "MOUVEMENT": "MOUVEMENT",
  "AUTRE": "AUTRE"
};

const MobileOperator = {
  "ORANGE": "ORANGE",
  "MTN": "MTN",
  "CAMTEL": "CAMTEL",
  "YOOMEE": "YOOMEE",
  "AUTRE": "AUTRE"
};

const PaymentType = {
  "MTN_MOBILE_MONEY": "MTN_MOBILE_MONEY",
  "ORANGE_MONEY": "ORANGE_MONEY",
  "EXPRESS_UNION": "EXPRESS_UNION",
  "PAYPAL": "PAYPAL",
  "BANK_TRANSFER": "BANK_TRANSFER",
  "CASH": "CASH",
  "AUTRE": "AUTRE"
};

const PersonalDocType = {
  "IDENTITY_CARD": "IDENTITY_CARD",
  "PASSPORT": "PASSPORT",
  "DRIVER_LICENSE": "DRIVER_LICENSE",
  "SCHOOL_CERTIFICATE": "SCHOOL_CERTIFICATE",
  "HEALTH_RECORD": "HEALTH_RECORD",
  "AUTRE": "AUTRE"
};

const Sexe = {
  "H": "H",
  "F": "F"
};

const TeacherTitle = {
  "PR": "PR",
  "DR": "DR",
  "CTD": "CTD",
  "MC": "MC",
  "MCF": "MCF",
  "PU": "PU",
  "PH": "PH",
  "PAST": "PAST",
  "ATER": "ATER",
  "AI": "AI",
  "BIATSS": "BIATSS",
  "AUTRE": "AUTRE"
};

const UserType = {
  "STUDENT": "STUDENT",
  "TEACHER": "TEACHER",
  "VISITER": "VISITER",
  "ADMIN": "ADMIN",
  "AUTRE": "AUTRE"
};

const Status = {
  "NEW": "NEW",
  "PENDING": "PENDING",
  "APPROVED": "APPROVED",
  "REFUSED": "REFUSED",
  "AUTRE": "AUTRE"
};

const ContentType = {
  "PICTURE": "PICTURE",
  "PDF": "PDF",
  "WORD": "WORD",
  "HTML": "HTML",
  "VIDEO": "VIDEO",
  "AUTRE": "AUTRE"
};

const ExamType = {
  "CC": "CC",
  "SN": "SN",
  "TD": "TD",
  "COURS": "COURS",
  "RATTRAPAGE": "RATTRAPAGE",
  "CONCOURS": "CONCOURS",
  "TP": "TP",
  "AUTRE": "AUTRE"
};

const ProcedureType = {
  "ADMISSION": "ADMISSION",
  "INSCRIPTION": "INSCRIPTION",
  "BOURSE": "BOURSE",
  "LOGEMENT": "LOGEMENT",
  "EXAMEN": "EXAMEN",
  "DIPLOME": "DIPLOME",
  "REQUETE": "REQUETE",
  "PAYEMENT": "PAYEMENT",
  "AUTRE": "AUTRE"
};

const ProcedureSubtType = {
  "NOTE": "NOTE",
  "MATRICULE": "MATRICULE",
  "CHANGEMENT_FIL": "CHANGEMENT_FIL",
  "AUTRE": "AUTRE"
};

const Semestre = {
  "S1": "S1",
  "S2": "S2",
  "S3": "S3",
  "S4": "S4",
  "AUTRE": "AUTRE"
};

const University = {
  "UY1": "UY1",
  "UY2": "UY2",
  "UDOUL": "UDOUL",
  "UDSCHANG": "UDSCHANG",
  "AUTRE": "AUTRE"
};

const Faculty = {
  "FS": "FS",
  "FSE": "FSE",
  "FALSH": "FALSH",
  "FMSB": "FMSB",
  "AUTRE": "AUTRE"
};

const Level = {
  "L1": "L1",
  "L2": "L2",
  "L3": "L3",
  "M1": "M1",
  "M2": "M2",
  "AUTRE": "AUTRE"
};

const CodeUe = {
  "MATH1031": "MATH1031"
};

const Departement = {
  "BIOCHIMIE": "BIOCHIMIE",
  "BIOLOGIE_ET_PHYSIOLOGIE_ANIMALES": "BIOLOGIE_ET_PHYSIOLOGIE_ANIMALES",
  "BIOLOGIE_ET_PHYSIOLOGIE_VEGETALES": "BIOLOGIE_ET_PHYSIOLOGIE_VEGETALES",
  "CHIMIE_ORGANIQUE": "CHIMIE_ORGANIQUE",
  "INFORMATIQUE": "INFORMATIQUE",
  "PHYSIQUE": "PHYSIQUE",
  "MATHEMATIQUE": "MATHEMATIQUE",
  "SCIENCES_DE_LA_TERRE_ET_DE_L_UNIVERS": "SCIENCES_DE_LA_TERRE_ET_DE_L_UNIVERS",
  "MICROBIOLOGIE": "MICROBIOLOGIE",
  "ANGLAIS": "ANGLAIS",
  "ALLEMAND": "ALLEMAND",
  "ANTHROPOLOGIE": "ANTHROPOLOGIE",
  "ARTS_ARCHEOLOGIE": "ARTS_ARCHEOLOGIE",
  "ESPAGNOL": "ESPAGNOL",
  "GEOGRAPHIE": "GEOGRAPHIE",
  "HISTOIRE": "HISTOIRE",
  "LANGUE_AFRICAINES_ET_LINGUISTIQUE": "LANGUE_AFRICAINES_ET_LINGUISTIQUE",
  "LETTRES_BILINGUES": "LETTRES_BILINGUES",
  "LITTERATURE_ET_CIVILISATION_AFRICAINE": "LITTERATURE_ET_CIVILISATION_AFRICAINE",
  "LETTRES_MODERNES_FRANCAISE": "LETTRES_MODERNES_FRANCAISE",
  "PHILOSOPHIE": "PHILOSOPHIE",
  "PSYCHOLOGIE": "PSYCHOLOGIE",
  "SOCIOLOGIE": "SOCIOLOGIE",
  "EDUCATION_SPECIALISEE": "EDUCATION_SPECIALISEE",
  "INTERVENTION_ORIENTATION_EDUCATION_EXTRASCOLAIRE": "INTERVENTION_ORIENTATION_EDUCATION_EXTRASCOLAIRE",
  "CURRICULA_ET_EVALUATIONS": "CURRICULA_ET_EVALUATIONS",
  "DIDACTIQUE_DES_DISCIPLINES": "DIDACTIQUE_DES_DISCIPLINES",
  "MANAGEMENT_DE_L_EDUCATION": "MANAGEMENT_DE_L_EDUCATION",
  "ENSEIGNEMENTS_FONDAMENTAUX_EN_EDUCATION": "ENSEIGNEMENTS_FONDAMENTAUX_EN_EDUCATION",
  "AUTRE": "AUTRE"
};

const Filiere = {
  "MATH": "MATH",
  "INF": "INF",
  "PHYS": "PHYS",
  "CHIM": "CHIM",
  "BIOS": "BIOS",
  "ICT4_D": "ICT4D",
  "SIGL": "SIGL",
  "RAM": "RAM",
  "SSI": "SSI",
  "MED": "MED",
  "PHARM": "PHARM",
  "ODON": "ODON",
  "SOCIO": "SOCIO",
  "ANTHRO": "ANTHRO",
  "PSYCHO": "PSYCHO",
  "LLF": "LLF",
  "LLA": "LLA",
  "LLR": "LLR",
  "HIST": "HIST",
  "AUTRE": "AUTRE"
};

const { User, Exam, Procedure, Info, Transaction, Suggestion, PhoneNumber, Comment, Exercice, Exo, PersonalDocument, PaymentMethod, Movement, Asset, Student, Teacher, Location, Correction, Contact, Address, Device } = initSchema(schema);

export {
  User,
  Exam,
  Procedure,
  Info,
  Transaction,
  Suggestion,
  SuggestionSubject,
  InfoType,
  TransactionType,
  MobileOperator,
  PaymentType,
  PersonalDocType,
  Sexe,
  TeacherTitle,
  UserType,
  Status,
  ContentType,
  ExamType,
  ProcedureType,
  ProcedureSubtType,
  Semestre,
  University,
  Faculty,
  Level,
  CodeUe,
  Departement,
  Filiere,
  PhoneNumber,
  Comment,
  Exercice,
  Exo,
  PersonalDocument,
  PaymentMethod,
  Movement,
  Asset,
  Student,
  Teacher,
  Location,
  Correction,
  Contact,
  Address,
  Device
};