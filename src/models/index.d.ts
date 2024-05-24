import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum SuggestionSubject {
  FEEDBACK = "Feedback",
  SUPPORT = "Support",
  INQUIRY = "Inquiry",
  OTHER = "Other"
}

export enum InfoType {
  DIVERS = "DIVERS",
  COMMUNIQUE = "COMMUNIQUE",
  ASTUCES_ETUDIANTS = "ASTUCES_ETUDIANTS",
  MENU_RESTAU = "MENU_RESTAU",
  BOURSE = "BOURSE",
  JOB = "JOB",
  ALERT = "ALERT",
  SANTE_ET_BIEN_ETRE = "SANTE_ET_BIEN_ETRE",
  AUTRE = "AUTRE"
}

export enum TransactionType {
  PAYMENT = "PAYMENT",
  SUGESTION = "SUGESTION",
  MOUVEMENT = "MOUVEMENT",
  AUTRE = "AUTRE"
}

export enum MobileOperator {
  ORANGE = "ORANGE",
  MTN = "MTN",
  CAMTEL = "CAMTEL",
  YOOMEE = "YOOMEE",
  AUTRE = "AUTRE"
}

export enum PaymentType {
  MTN_MOBILE_MONEY = "MTN_MOBILE_MONEY",
  ORANGE_MONEY = "ORANGE_MONEY",
  EXPRESS_UNION = "EXPRESS_UNION",
  PAYPAL = "PAYPAL",
  BANK_TRANSFER = "BANK_TRANSFER",
  CASH = "CASH",
  AUTRE = "AUTRE"
}

export enum PersonalDocType {
  IDENTITY_CARD = "IDENTITY_CARD",
  PASSPORT = "PASSPORT",
  DRIVER_LICENSE = "DRIVER_LICENSE",
  SCHOOL_CERTIFICATE = "SCHOOL_CERTIFICATE",
  HEALTH_RECORD = "HEALTH_RECORD",
  AUTRE = "AUTRE"
}

export enum Sexe {
  H = "H",
  F = "F"
}

export enum TeacherTitle {
  PR = "PR",
  DR = "DR",
  CTD = "CTD",
  MC = "MC",
  MCF = "MCF",
  PU = "PU",
  PH = "PH",
  PAST = "PAST",
  ATER = "ATER",
  AI = "AI",
  BIATSS = "BIATSS",
  AUTRE = "AUTRE"
}

export enum UserType {
  STUDENT = "STUDENT",
  TEACHER = "TEACHER",
  VISITER = "VISITER",
  ADMIN = "ADMIN",
  AUTRE = "AUTRE"
}

export enum Status {
  NEW = "NEW",
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REFUSED = "REFUSED",
  AUTRE = "AUTRE"
}

export enum ContentType {
  PICTURE = "PICTURE",
  PDF = "PDF",
  WORD = "WORD",
  HTML = "HTML",
  VIDEO = "VIDEO",
  AUTRE = "AUTRE"
}

export enum ExamType {
  CC = "CC",
  SN = "SN",
  TD = "TD",
  COURS = "COURS",
  RATTRAPAGE = "RATTRAPAGE",
  CONCOURS = "CONCOURS",
  TP = "TP",
  AUTRE = "AUTRE"
}

export enum ProcedureType {
  ADMISSION = "ADMISSION",
  INSCRIPTION = "INSCRIPTION",
  BOURSE = "BOURSE",
  LOGEMENT = "LOGEMENT",
  EXAMEN = "EXAMEN",
  DIPLOME = "DIPLOME",
  REQUETE = "REQUETE",
  PAYEMENT = "PAYEMENT",
  AUTRE = "AUTRE"
}

export enum ProcedureSubtType {
  NOTE = "NOTE",
  MATRICULE = "MATRICULE",
  CHANGEMENT_FIL = "CHANGEMENT_FIL",
  AUTRE = "AUTRE"
}

export enum Semestre {
  S1 = "S1",
  S2 = "S2",
  S3 = "S3",
  S4 = "S4",
  AUTRE = "AUTRE"
}

export enum University {
  UY1 = "UY1",
  UY2 = "UY2",
  UDOUL = "UDOUL",
  UDSCHANG = "UDSCHANG",
  AUTRE = "AUTRE"
}

export enum Faculty {
  FS = "FS",
  FSE = "FSE",
  FALSH = "FALSH",
  FMSB = "FMSB",
  AUTRE = "AUTRE"
}

export enum Level {
  L1 = "L1",
  L2 = "L2",
  L3 = "L3",
  M1 = "M1",
  M2 = "M2",
  AUTRE = "AUTRE"
}

export enum CodeUe {
  MATH1031 = "MATH1031"
}

export enum Departement {
  BIOCHIMIE = "BIOCHIMIE",
  BIOLOGIE_ET_PHYSIOLOGIE_ANIMALES = "BIOLOGIE_ET_PHYSIOLOGIE_ANIMALES",
  BIOLOGIE_ET_PHYSIOLOGIE_VEGETALES = "BIOLOGIE_ET_PHYSIOLOGIE_VEGETALES",
  CHIMIE_ORGANIQUE = "CHIMIE_ORGANIQUE",
  INFORMATIQUE = "INFORMATIQUE",
  PHYSIQUE = "PHYSIQUE",
  MATHEMATIQUE = "MATHEMATIQUE",
  SCIENCES_DE_LA_TERRE_ET_DE_L_UNIVERS = "SCIENCES_DE_LA_TERRE_ET_DE_L_UNIVERS",
  MICROBIOLOGIE = "MICROBIOLOGIE",
  ANGLAIS = "ANGLAIS",
  ALLEMAND = "ALLEMAND",
  ANTHROPOLOGIE = "ANTHROPOLOGIE",
  ARTS_ARCHEOLOGIE = "ARTS_ARCHEOLOGIE",
  ESPAGNOL = "ESPAGNOL",
  GEOGRAPHIE = "GEOGRAPHIE",
  HISTOIRE = "HISTOIRE",
  LANGUE_AFRICAINES_ET_LINGUISTIQUE = "LANGUE_AFRICAINES_ET_LINGUISTIQUE",
  LETTRES_BILINGUES = "LETTRES_BILINGUES",
  LITTERATURE_ET_CIVILISATION_AFRICAINE = "LITTERATURE_ET_CIVILISATION_AFRICAINE",
  LETTRES_MODERNES_FRANCAISE = "LETTRES_MODERNES_FRANCAISE",
  PHILOSOPHIE = "PHILOSOPHIE",
  PSYCHOLOGIE = "PSYCHOLOGIE",
  SOCIOLOGIE = "SOCIOLOGIE",
  EDUCATION_SPECIALISEE = "EDUCATION_SPECIALISEE",
  INTERVENTION_ORIENTATION_EDUCATION_EXTRASCOLAIRE = "INTERVENTION_ORIENTATION_EDUCATION_EXTRASCOLAIRE",
  CURRICULA_ET_EVALUATIONS = "CURRICULA_ET_EVALUATIONS",
  DIDACTIQUE_DES_DISCIPLINES = "DIDACTIQUE_DES_DISCIPLINES",
  MANAGEMENT_DE_L_EDUCATION = "MANAGEMENT_DE_L_EDUCATION",
  ENSEIGNEMENTS_FONDAMENTAUX_EN_EDUCATION = "ENSEIGNEMENTS_FONDAMENTAUX_EN_EDUCATION",
  AUTRE = "AUTRE"
}

export enum Filiere {
  MATH = "MATH",
  INF = "INF",
  PHYS = "PHYS",
  CHIM = "CHIM",
  BIOS = "BIOS",
  ICT4_D = "ICT4D",
  SIGL = "SIGL",
  RAM = "RAM",
  SSI = "SSI",
  MED = "MED",
  PHARM = "PHARM",
  ODON = "ODON",
  SOCIO = "SOCIO",
  ANTHRO = "ANTHRO",
  PSYCHO = "PSYCHO",
  LLF = "LLF",
  LLA = "LLA",
  LLR = "LLR",
  HIST = "HIST",
  AUTRE = "AUTRE"
}

type EagerPhoneNumber = {
  readonly id: string;
  readonly number?: string | null;
  readonly provider?: MobileOperator | keyof typeof MobileOperator | null;
  readonly isMomo?: boolean | null;
  readonly isVerified?: boolean | null;
}

type LazyPhoneNumber = {
  readonly id: string;
  readonly number?: string | null;
  readonly provider?: MobileOperator | keyof typeof MobileOperator | null;
  readonly isMomo?: boolean | null;
  readonly isVerified?: boolean | null;
}

export declare type PhoneNumber = LazyLoading extends LazyLoadingDisabled ? EagerPhoneNumber : LazyPhoneNumber

export declare const PhoneNumber: (new (init: ModelInit<PhoneNumber>) => PhoneNumber)

type EagerComment = {
  readonly id: string;
  readonly picture?: string | null;
  readonly comment?: string | null;
  readonly rate?: number | null;
  readonly name?: string | null;
  readonly likes?: (string | null)[] | null;
  readonly parentId?: string | null;
  readonly userID?: string | null;
  readonly createAt?: string | null;
  readonly updateAt?: string | null;
}

type LazyComment = {
  readonly id: string;
  readonly picture?: string | null;
  readonly comment?: string | null;
  readonly rate?: number | null;
  readonly name?: string | null;
  readonly likes?: (string | null)[] | null;
  readonly parentId?: string | null;
  readonly userID?: string | null;
  readonly createAt?: string | null;
  readonly updateAt?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment)

type EagerExercice = {
  readonly id: string;
  readonly number?: number | null;
  readonly exo?: Exo | null;
}

type LazyExercice = {
  readonly id: string;
  readonly number?: number | null;
  readonly exo?: Exo | null;
}

export declare type Exercice = LazyLoading extends LazyLoadingDisabled ? EagerExercice : LazyExercice

export declare const Exercice: (new (init: ModelInit<Exercice>) => Exercice)

type EagerExo = {
  readonly id: string;
  readonly libelle?: string | null;
  readonly asset?: Asset | null;
  readonly enonce?: string | null;
  readonly questions?: (string | null)[] | null;
  readonly concern?: Filiere | keyof typeof Filiere | null;
}

type LazyExo = {
  readonly id: string;
  readonly libelle?: string | null;
  readonly asset?: Asset | null;
  readonly enonce?: string | null;
  readonly questions?: (string | null)[] | null;
  readonly concern?: Filiere | keyof typeof Filiere | null;
}

export declare type Exo = LazyLoading extends LazyLoadingDisabled ? EagerExo : LazyExo

export declare const Exo: (new (init: ModelInit<Exo>) => Exo)

type EagerPersonalDocument = {
  readonly id: string;
  readonly type?: PersonalDocType | keyof typeof PersonalDocType | null;
  readonly asset?: (string | null)[] | null;
}

type LazyPersonalDocument = {
  readonly id: string;
  readonly type?: PersonalDocType | keyof typeof PersonalDocType | null;
  readonly asset?: (string | null)[] | null;
}

export declare type PersonalDocument = LazyLoading extends LazyLoadingDisabled ? EagerPersonalDocument : LazyPersonalDocument

export declare const PersonalDocument: (new (init: ModelInit<PersonalDocument>) => PersonalDocument)

type EagerPaymentMethod = {
  readonly id: string;
  readonly type?: PaymentType | keyof typeof PaymentType | null;
  readonly phoneNumber?: PhoneNumber | null;
}

type LazyPaymentMethod = {
  readonly id: string;
  readonly type?: PaymentType | keyof typeof PaymentType | null;
  readonly phoneNumber?: PhoneNumber | null;
}

export declare type PaymentMethod = LazyLoading extends LazyLoadingDisabled ? EagerPaymentMethod : LazyPaymentMethod

export declare const PaymentMethod: (new (init: ModelInit<PaymentMethod>) => PaymentMethod)

type EagerMovement = {
  readonly id: string;
  readonly description?: string | null;
  readonly country?: string | null;
  readonly town?: string | null;
  readonly origin?: string | null;
  readonly religion?: string | null;
  readonly secondary_school?: string | null;
  readonly department?: string | null;
}

type LazyMovement = {
  readonly id: string;
  readonly description?: string | null;
  readonly country?: string | null;
  readonly town?: string | null;
  readonly origin?: string | null;
  readonly religion?: string | null;
  readonly secondary_school?: string | null;
  readonly department?: string | null;
}

export declare type Movement = LazyLoading extends LazyLoadingDisabled ? EagerMovement : LazyMovement

export declare const Movement: (new (init: ModelInit<Movement>) => Movement)

type EagerAsset = {
  readonly id: string;
  readonly name?: string | null;
  readonly number?: number | null;
  readonly size?: number | null;
  readonly path?: string | null;
  readonly content?: string | null;
  readonly contentType?: ContentType | keyof typeof ContentType | null;
}

type LazyAsset = {
  readonly id: string;
  readonly name?: string | null;
  readonly number?: number | null;
  readonly size?: number | null;
  readonly path?: string | null;
  readonly content?: string | null;
  readonly contentType?: ContentType | keyof typeof ContentType | null;
}

export declare type Asset = LazyLoading extends LazyLoadingDisabled ? EagerAsset : LazyAsset

export declare const Asset: (new (init: ModelInit<Asset>) => Asset)

type EagerStudent = {
  readonly id: string;
  readonly filiere?: Filiere | keyof typeof Filiere | null;
  readonly level?: Level | keyof typeof Level | null;
  readonly faculte?: Faculty | keyof typeof Faculty | null;
  readonly picture?: Asset | null;
}

type LazyStudent = {
  readonly id: string;
  readonly filiere?: Filiere | keyof typeof Filiere | null;
  readonly level?: Level | keyof typeof Level | null;
  readonly faculte?: Faculty | keyof typeof Faculty | null;
  readonly picture?: Asset | null;
}

export declare type Student = LazyLoading extends LazyLoadingDisabled ? EagerStudent : LazyStudent

export declare const Student: (new (init: ModelInit<Student>) => Student)

type EagerTeacher = {
  readonly id: string;
  readonly filiere?: Filiere | keyof typeof Filiere | null;
  readonly faculte?: Faculty | keyof typeof Faculty | null;
  readonly ecole?: string | null;
  readonly title?: TeacherTitle | keyof typeof TeacherTitle | null;
  readonly picture?: Asset | null;
  readonly description?: string | null;
}

type LazyTeacher = {
  readonly id: string;
  readonly filiere?: Filiere | keyof typeof Filiere | null;
  readonly faculte?: Faculty | keyof typeof Faculty | null;
  readonly ecole?: string | null;
  readonly title?: TeacherTitle | keyof typeof TeacherTitle | null;
  readonly picture?: Asset | null;
  readonly description?: string | null;
}

export declare type Teacher = LazyLoading extends LazyLoadingDisabled ? EagerTeacher : LazyTeacher

export declare const Teacher: (new (init: ModelInit<Teacher>) => Teacher)

type EagerLocation = {
  readonly id: string;
  readonly latitude?: number | null;
  readonly longitude?: number | null;
  readonly address?: string | null;
}

type LazyLocation = {
  readonly id: string;
  readonly latitude?: number | null;
  readonly longitude?: number | null;
  readonly address?: string | null;
}

export declare type Location = LazyLoading extends LazyLoadingDisabled ? EagerLocation : LazyLocation

export declare const Location: (new (init: ModelInit<Location>) => Location)

type EagerCorrection = {
  readonly id: string;
  readonly assets?: (string | null)[] | null;
  readonly rating?: number | null;
  readonly likes?: (string | null)[] | null;
  readonly comments?: (string | null)[] | null;
  readonly url?: string | null;
  readonly answersExo?: (string | null)[] | null;
}

type LazyCorrection = {
  readonly id: string;
  readonly assets?: (string | null)[] | null;
  readonly rating?: number | null;
  readonly likes?: (string | null)[] | null;
  readonly comments?: (string | null)[] | null;
  readonly url?: string | null;
  readonly answersExo?: (string | null)[] | null;
}

export declare type Correction = LazyLoading extends LazyLoadingDisabled ? EagerCorrection : LazyCorrection

export declare const Correction: (new (init: ModelInit<Correction>) => Correction)

type EagerContact = {
  readonly id: string;
  readonly assets?: (string | null)[] | null;
  readonly phone?: PhoneNumber | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly middleName?: string | null;
  readonly birthday?: string | null;
  readonly cniNumber?: string | null;
  readonly userID?: string | null;
  readonly addresses?: (string | null)[] | null;
  readonly sexe?: Sexe | keyof typeof Sexe | null;
}

type LazyContact = {
  readonly id: string;
  readonly assets?: (string | null)[] | null;
  readonly phone?: PhoneNumber | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly middleName?: string | null;
  readonly birthday?: string | null;
  readonly cniNumber?: string | null;
  readonly userID?: string | null;
  readonly addresses?: (string | null)[] | null;
  readonly sexe?: Sexe | keyof typeof Sexe | null;
}

export declare type Contact = LazyLoading extends LazyLoadingDisabled ? EagerContact : LazyContact

export declare const Contact: (new (init: ModelInit<Contact>) => Contact)

type EagerAddress = {
  readonly id: string;
  readonly name?: string | null;
  readonly zipCode?: string | null;
  readonly town?: string | null;
  readonly city?: string | null;
}

type LazyAddress = {
  readonly id: string;
  readonly name?: string | null;
  readonly zipCode?: string | null;
  readonly town?: string | null;
  readonly city?: string | null;
}

export declare type Address = LazyLoading extends LazyLoadingDisabled ? EagerAddress : LazyAddress

export declare const Address: (new (init: ModelInit<Address>) => Address)

type EagerDevice = {
  readonly id: string;
  readonly name?: string | null;
  readonly model?: string | null;
  readonly os?: string | null;
  readonly token?: string | null;
  readonly lastDate?: string | null;
  readonly isEnable?: boolean | null;
}

type LazyDevice = {
  readonly id: string;
  readonly name?: string | null;
  readonly model?: string | null;
  readonly os?: string | null;
  readonly token?: string | null;
  readonly lastDate?: string | null;
  readonly isEnable?: boolean | null;
}

export declare type Device = LazyLoading extends LazyLoadingDisabled ? EagerDevice : LazyDevice

export declare const Device: (new (init: ModelInit<Device>) => Device)

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly phoneNumbers?: (string | null)[] | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly userCognitoId?: string | null;
  readonly picture?: Asset | null;
  readonly type?: UserType | keyof typeof UserType | null;
  readonly student?: Student | null;
  readonly teacher?: Teacher | null;
  readonly contacts?: (string | null)[] | null;
  readonly devices?: (string | null)[] | null;
  readonly invitedBy?: string | null;
  readonly sexe?: Sexe | keyof typeof Sexe | null;
  readonly transactions?: (Transaction | null)[] | null;
  readonly exams?: (Exam | null)[] | null;
  readonly procedures?: (Procedure | null)[] | null;
  readonly infos?: (Info | null)[] | null;
  readonly suggestions?: (Suggestion | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly phoneNumbers?: (string | null)[] | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly userCognitoId?: string | null;
  readonly picture?: Asset | null;
  readonly type?: UserType | keyof typeof UserType | null;
  readonly student?: Student | null;
  readonly teacher?: Teacher | null;
  readonly contacts?: (string | null)[] | null;
  readonly devices?: (string | null)[] | null;
  readonly invitedBy?: string | null;
  readonly sexe?: Sexe | keyof typeof Sexe | null;
  readonly transactions: AsyncCollection<Transaction>;
  readonly exams: AsyncCollection<Exam>;
  readonly procedures: AsyncCollection<Procedure>;
  readonly infos: AsyncCollection<Info>;
  readonly suggestions: AsyncCollection<Suggestion>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerExam = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Exam, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly code?: string | null;
  readonly ue?: string | null;
  readonly codeUe?: CodeUe | keyof typeof CodeUe | null;
  readonly year?: string | null;
  readonly type?: ExamType | keyof typeof ExamType | null;
  readonly teacherId: string;
  readonly teacher?: User | null;
  readonly level?: Level | keyof typeof Level | null;
  readonly departement?: Departement | keyof typeof Departement | null;
  readonly faculty?: Faculty | keyof typeof Faculty | null;
  readonly universite?: University | keyof typeof University | null;
  readonly semester?: Semestre | keyof typeof Semestre | null;
  readonly filiere?: Filiere | keyof typeof Filiere | null;
  readonly assets?: (string | null)[] | null;
  readonly views?: number | null;
  readonly likes?: (string | null)[] | null;
  readonly description?: string | null;
  readonly correction?: (string | null)[] | null;
  readonly tags?: (string | null)[] | null;
  readonly comments?: (string | null)[] | null;
  readonly proposedBy?: string | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly preview?: Asset | null;
  readonly exercices?: (string | null)[] | null;
  readonly userID: string;
  readonly user?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExam = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Exam, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly code?: string | null;
  readonly ue?: string | null;
  readonly codeUe?: CodeUe | keyof typeof CodeUe | null;
  readonly year?: string | null;
  readonly type?: ExamType | keyof typeof ExamType | null;
  readonly teacherId: string;
  readonly teacher: AsyncItem<User | undefined>;
  readonly level?: Level | keyof typeof Level | null;
  readonly departement?: Departement | keyof typeof Departement | null;
  readonly faculty?: Faculty | keyof typeof Faculty | null;
  readonly universite?: University | keyof typeof University | null;
  readonly semester?: Semestre | keyof typeof Semestre | null;
  readonly filiere?: Filiere | keyof typeof Filiere | null;
  readonly assets?: (string | null)[] | null;
  readonly views?: number | null;
  readonly likes?: (string | null)[] | null;
  readonly description?: string | null;
  readonly correction?: (string | null)[] | null;
  readonly tags?: (string | null)[] | null;
  readonly comments?: (string | null)[] | null;
  readonly proposedBy?: string | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly preview?: Asset | null;
  readonly exercices?: (string | null)[] | null;
  readonly userID: string;
  readonly user: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Exam = LazyLoading extends LazyLoadingDisabled ? EagerExam : LazyExam

export declare const Exam: (new (init: ModelInit<Exam>) => Exam) & {
  copyOf(source: Exam, mutator: (draft: MutableModel<Exam>) => MutableModel<Exam> | void): Exam;
}

type EagerProcedure = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Procedure, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly code?: string | null;
  readonly type: ProcedureType | keyof typeof ProcedureType;
  readonly subType: ProcedureSubtType | keyof typeof ProcedureSubtType;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly date?: string | null;
  readonly endAt?: string | null;
  readonly url?: string | null;
  readonly assets?: (string | null)[] | null;
  readonly comments?: (string | null)[] | null;
  readonly assist?: (string | null)[] | null;
  readonly likes?: (string | null)[] | null;
  readonly location?: Location | null;
  readonly responsable?: string | null;
  readonly faculty?: Faculty | keyof typeof Faculty | null;
  readonly tags?: (string | null)[] | null;
  readonly userID: string;
  readonly user?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProcedure = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Procedure, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly code?: string | null;
  readonly type: ProcedureType | keyof typeof ProcedureType;
  readonly subType: ProcedureSubtType | keyof typeof ProcedureSubtType;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly date?: string | null;
  readonly endAt?: string | null;
  readonly url?: string | null;
  readonly assets?: (string | null)[] | null;
  readonly comments?: (string | null)[] | null;
  readonly assist?: (string | null)[] | null;
  readonly likes?: (string | null)[] | null;
  readonly location?: Location | null;
  readonly responsable?: string | null;
  readonly faculty?: Faculty | keyof typeof Faculty | null;
  readonly tags?: (string | null)[] | null;
  readonly userID: string;
  readonly user: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Procedure = LazyLoading extends LazyLoadingDisabled ? EagerProcedure : LazyProcedure

export declare const Procedure: (new (init: ModelInit<Procedure>) => Procedure) & {
  copyOf(source: Procedure, mutator: (draft: MutableModel<Procedure>) => MutableModel<Procedure> | void): Procedure;
}

type EagerInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Info, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly type: InfoType | keyof typeof InfoType;
  readonly code?: string | null;
  readonly assets?: (string | null)[] | null;
  readonly description?: string | null;
  readonly publishedAt?: string | null;
  readonly endAt?: string | null;
  readonly url?: string | null;
  readonly rating?: number | null;
  readonly likes?: (string | null)[] | null;
  readonly views?: number | null;
  readonly comments?: (string | null)[] | null;
  readonly alert?: (string | null)[] | null;
  readonly tags?: (string | null)[] | null;
  readonly userID: string;
  readonly user?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Info, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly type: InfoType | keyof typeof InfoType;
  readonly code?: string | null;
  readonly assets?: (string | null)[] | null;
  readonly description?: string | null;
  readonly publishedAt?: string | null;
  readonly endAt?: string | null;
  readonly url?: string | null;
  readonly rating?: number | null;
  readonly likes?: (string | null)[] | null;
  readonly views?: number | null;
  readonly comments?: (string | null)[] | null;
  readonly alert?: (string | null)[] | null;
  readonly tags?: (string | null)[] | null;
  readonly userID: string;
  readonly user: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Info = LazyLoading extends LazyLoadingDisabled ? EagerInfo : LazyInfo

export declare const Info: (new (init: ModelInit<Info>) => Info) & {
  copyOf(source: Info, mutator: (draft: MutableModel<Info>) => MutableModel<Info> | void): Info;
}

type EagerTransaction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Transaction, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: TransactionType | keyof typeof TransactionType | null;
  readonly name?: string | null;
  readonly mouvement?: Movement | null;
  readonly userID: string;
  readonly user?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTransaction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Transaction, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: TransactionType | keyof typeof TransactionType | null;
  readonly name?: string | null;
  readonly mouvement?: Movement | null;
  readonly userID: string;
  readonly user: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Transaction = LazyLoading extends LazyLoadingDisabled ? EagerTransaction : LazyTransaction

export declare const Transaction: (new (init: ModelInit<Transaction>) => Transaction) & {
  copyOf(source: Transaction, mutator: (draft: MutableModel<Transaction>) => MutableModel<Transaction> | void): Transaction;
}

type EagerSuggestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Suggestion, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly user?: User | null;
  readonly subject: SuggestionSubject | keyof typeof SuggestionSubject;
  readonly email?: string | null;
  readonly phoneNumber?: PhoneNumber | null;
  readonly metadata?: string | null;
  readonly message: string;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

type LazySuggestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Suggestion, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly user: AsyncItem<User | undefined>;
  readonly subject: SuggestionSubject | keyof typeof SuggestionSubject;
  readonly email?: string | null;
  readonly phoneNumber?: PhoneNumber | null;
  readonly metadata?: string | null;
  readonly message: string;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

export declare type Suggestion = LazyLoading extends LazyLoadingDisabled ? EagerSuggestion : LazySuggestion

export declare const Suggestion: (new (init: ModelInit<Suggestion>) => Suggestion) & {
  copyOf(source: Suggestion, mutator: (draft: MutableModel<Suggestion>) => MutableModel<Suggestion> | void): Suggestion;
}