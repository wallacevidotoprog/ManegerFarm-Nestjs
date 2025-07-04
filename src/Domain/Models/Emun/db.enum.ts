export enum PropertyStatus {
  NONE = 'NONE',
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  LEASED = 'LEASED',
}

export enum Departaments {
  NONE = 'NONE',
  OPERATIONAL = 'OPERATIONAL',
  ADMINISTRATIVE = 'ADMINISTRATIVE',
  FINANCIAL = 'FINANCIAL',
  MAINTENANCE = 'MAINTENANCE',
}

export enum CategoryCnh {
  NONE = 'NONE',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
}

export enum Sex {
  NONE = 'NONE',
  MASCULINO = 'MASCULINO',
  FEMININO = 'FEMININO',
  OUTROS = 'OUTROS',
}

export enum Role {
  NONE = 'NONE',
  DEV = 'DEV',
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  GENERAL_MANAGER = 'GENERAL_MANAGER',
  EMPLOYEE = 'EMPLOYEE',
  OWNER = 'OWNER',
}

export enum ActionModification {
  NONE = 'NONE',
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

export enum BovineModalities {
  NONE = 'NONE',
  CUT = 'CUT',
  MILK = 'MILK',
  MIXED = 'MIXED',
}

export enum BovinePhasesCut {
  NONE = 'NONE',
  CUT = 'CUT',
  CREATE = 'CREATE',
  RECREATE = 'RECREATE',
}

export enum BovinePhasesMilk {
  NONE = 'NONE',
  MILK = 'MILK',
  PREGNANT = 'PREGNANT',
}

export enum BovineSituation {
  NONE = 'NONE',
  DONATION = 'DONATION',
  SINGLE = 'SINGLE',
  PREGNANT = 'PREGNANT',
  ADULT = 'ADULT',
}

export enum AreaType {
  NONE = 'NONE',
  PASTURE = 'PASTURE',
  COCHO = 'COCHO',
  CONFINEMENT = 'CONFINEMENT',
  SEMI_CONFINEMENT = 'SEMI_CONFINEMENT',
}
