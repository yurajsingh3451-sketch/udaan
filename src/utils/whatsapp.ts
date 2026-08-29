// WhatsApp Automation Utility for UDAAN UPSC 1-to-1 Academic Counselling
export const COUNSELLING_PHONE_RAW = '6264749993';
export const COUNSELLING_PHONE_WITH_COUNTRY = '916264749993';
export const COUNSELLING_PHONE_DISPLAY = '+91 62647-49993';

export interface WhatsAppCounsellingParams {
  name?: string;
  phone?: string;
  targetYear?: string;
  mode?: string;
  courseInterest?: string;
  optionalSubject?: string;
  queryType?: 'counselling' | 'admission' | 'scholarship' | 'general' | 'faculty_slot';
}

export function buildWhatsAppCounsellingMessage(params?: WhatsAppCounsellingParams): string {
  const name = params?.name?.trim() || 'Civil Services Aspirant';
  const phone = params?.phone?.trim() || 'Provided on Chat';
  const targetYear = params?.targetYear || 'UPSC CSE 2026';
  const mode = params?.mode || 'Raipur Civil Lines Campus (In-Person) / Telephonic';
  const interest = params?.courseInterest || 'UPSC CSE Integrated Foundation Program';
  const queryType = params?.queryType || 'counselling';

  let header = `*UDAAN IAS ACADEMY — 1-TO-1 COUNSELLING REQUEST* 🎯\n`;
  if (queryType === 'scholarship') {
    header = `*UDAAN U-SAT 50% SCHOLARSHIP & 1-TO-1 ADMISSION INQUIRY* 🎓\n`;
  } else if (queryType === 'faculty_slot') {
    header = `*UDAAN IAS — 1-ON-1 SENIOR FACULTY ACADEMIC SLOT REQUEST* 🏛️\n`;
  }

  const message = `${header}
Hello UDAAN UPSC Mentorship Team!

I am requesting an automated *1-to-1 UPSC Academic Counselling & Strategy Session*.

📋 *Student Details:*
• *Name:* ${name}
• *Mobile:* ${phone}
• *Target Exam Year:* ${targetYear}
• *Program of Interest:* ${interest}
• *Preferred Consultation Mode:* ${mode}
${params?.optionalSubject ? `• *Optional Subject:* ${params.optionalSubject}\n` : ''}
Please connect me with a Senior Academic Counselor / Mentor to confirm my 1-to-1 appointment and share preparation roadmap.

_Sent via UDAAN 1-to-1 Automated Portal_`;

  return message;
}

export function getWhatsAppCounsellingUrl(params?: WhatsAppCounsellingParams): string {
  const message = buildWhatsAppCounsellingMessage(params);
  return `https://wa.me/${COUNSELLING_PHONE_WITH_COUNTRY}?text=${encodeURIComponent(message)}`;
}

export function openWhatsAppCounselling(params?: WhatsAppCounsellingParams): void {
  const url = getWhatsAppCounsellingUrl(params);
  if (typeof window !== 'undefined') {
    // Open in new window/tab or trigger WhatsApp app
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
