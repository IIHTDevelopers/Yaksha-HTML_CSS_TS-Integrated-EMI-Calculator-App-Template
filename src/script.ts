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
    if (!elements.calculateBtn || !elements.clearBtn || !elements.yearBtn ||
        !elements.monthBtn || !elements.lightBtn || !elements.darkBtn ||
        !elements.interestSlider || !elements.interestRateEl || !elements.loanTypeRadios) return;

    elements.calculateBtn.addEventListener('click', calculateEMI);
    elements.clearBtn.addEventListener('click', clearFields);

    elements.yearBtn.addEventListener('click', () => {
      isYear = true;
      elements.yearBtn?.classList.add('active');
      elements.monthBtn?.classList.remove('active');
    });

    elements.monthBtn.addEventListener('click', () => {
      isYear = false;
      elements.monthBtn?.classList.add('active');
      elements.yearBtn?.classList.remove('active');
    });

    elements.lightBtn.addEventListener('click', () => toggleTheme('light'));
    elements.darkBtn.addEventListener('click', () => toggleTheme('dark'));

    elements.interestSlider.addEventListener('input', () => {
      if (elements.interestRateEl && elements.interestSlider) {
        elements.interestRateEl.value = elements.interestSlider.value;
      }
    });

    elements.interestRateEl.addEventListener('input', () => {
      if (elements.interestSlider && elements.interestRateEl) {
        elements.interestSlider.value = elements.interestRateEl.value;
      }
    });

    elements.loanTypeRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        if (!elements.loanAmountEl || !elements.interestRateEl || !elements.interestSlider || !elements.loanTenureEl) return;

        if (radio.value === 'home') {
          elements.loanAmountEl.value = '5000000';
          elements.interestRateEl.value = '9';
          elements.interestSlider.value = '9';
          elements.loanTenureEl.value = '20';
        } else {
          elements.loanAmountEl.value = '200000';
          elements.interestRateEl.value = '12';
          elements.interestSlider.value = '12';
          elements.loanTenureEl.value = '3';
        }
      });
    });
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
