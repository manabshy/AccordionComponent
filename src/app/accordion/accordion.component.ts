import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  @Input() active = false;
  @Input() background = '-bg-solid-white';
  @Input() idAttribute: string = 'frequentlyAskedQuestions';
  @Input() title: string = 'Frequently Asked Questions';
  items: Array<any>;
  constructor() {
     this.items = [
     {
         "id": "1",
         "question": "What vehicles are covered?",
         "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     },
     {
         "id": "2",
         "question": "Can anyone drive a vehicle covered by a business policy?",
         "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     },
     {
         "id": "3",
         "question": "You say you don't charge for specialist equipment, what does that mean?",
         "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     },
     {
         "id": "4",
         "question": "Can I change my cover level and add/remove vehicles?",
         "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     },
     {
         "id": "5",
         "question": "What happens if my vehicle needs repairing and it's outside of business hours?",
         "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     }
   ]

   }
  toggleMenu(event: Event) {
    const toggleIcon = (event.currentTarget as HTMLElement).parentElement;
    const toggleDiv = toggleIcon?.querySelector('.toggle-content');
    const svgIcon = toggleIcon?.querySelector('.svg-rotate__icon');
    const fieldHeading = toggleIcon?.querySelector('.field-heading');
    if (!toggleIcon?.classList.contains('active')) {
      toggleIcon?.classList.add('active');
      fieldHeading?.classList.add('active');

      svgIcon?.classList.add('cross');
      toggleDiv?.classList.remove('hidden');
    } else {
      toggleIcon.classList.remove('active');
      toggleDiv?.classList.add('hidden');
      svgIcon?.classList.remove('cross');
      fieldHeading?.classList.remove('active');


    }
  }
}
