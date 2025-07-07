(() => {
  type Nullable<T> = T | null;

  let isYear: boolean = true;

  const elements = {
    loanAmountEl: null as Nullable<HTMLInputElement>,
    interestRateEl: null as Nullable<HTMLInputElement>,
    interestSlider: null as Nullable<HTMLInputElement>,
    loanTenureEl: null as Nullable<HTMLInputElement>,
    startDateEl: null as Nullable<HTMLInputElement>,
    emiOutput: null as Nullable<HTMLElement>,
    interestOutput: null as Nullable<HTMLElement>,
    paymentOutput: null as Nullable<HTMLElement>,
    yearBtn: null as Nullable<HTMLElement>,
    monthBtn: null as Nullable<HTMLElement>,
    lightBtn: null as Nullable<HTMLElement>,
    darkBtn: null as Nullable<HTMLElement>,
    calculateBtn: null as Nullable<HTMLElement>,
    clearBtn: null as Nullable<HTMLElement>,
   loanTypeRadios : null as unknown as NodeListOf<HTMLInputElement>
  };

  function calculateEMI(): void {
    
  }

  function clearFields(): void {
    
  }

  function toggleTheme(mode: string): void {
   
  }

  function setupElements(): void {
    
  }

  function setupEvents(): void {
    
  }

  function init(): void {
    setupElements();
    setupEvents();
  }

  if (typeof window !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }

    (window as any).calculateEMI = calculateEMI;
    (window as any).clearFields = clearFields;
    (window as any).toggleTheme = toggleTheme;
  }
})();
