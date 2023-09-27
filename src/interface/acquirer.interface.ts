interface CommonAcquirer {
    pay(data: any): string
  }


export type Acquirer<Authorize = void> = Authorize extends true ? CommonAcquirer & { 
    authorize(data: any): string
} : CommonAcquirer