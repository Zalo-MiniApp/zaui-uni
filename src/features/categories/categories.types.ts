export interface Department {
  name: string;
  desc: string;
}

export interface Category {
  name: string;
  departments: Department[];
}
