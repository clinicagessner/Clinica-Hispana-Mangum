import type { ServiceFaq } from "@/types";

/**
 * FAQs por servicio (clave = slug). Bilingüe. Se usan en la página de
 * detalle del servicio y para el JSON-LD FAQPage.
 */
export const SERVICE_FAQS: Record<string, ServiceFaq[]> = {
  "condiciones-cronicas": [
    {
      question: "¿Cada cuánto debo hacerme exámenes de control?",
      answer: "Depende de tu condición; por lo general cada 3 a 6 meses para diabetes, presión o colesterol. Te damos un plan de seguimiento personalizado.",
      questionEn: "How often should I get control labs?",
      answerEn: "It depends on your condition; usually every 3 to 6 months for diabetes, blood pressure or cholesterol. We give you a personalized follow-up plan.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "tiroides": [
    {
      question: "¿Qué prueba se usa para revisar la tiroides?",
      answer: "Usamos principalmente la TSH y, si es necesario, T3 y T4 para evaluar cómo funciona tu tiroides.",
      questionEn: "What test is used to check the thyroid?",
      answerEn: "We mainly use TSH and, if needed, T3 and T4 to evaluate how your thyroid is working.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "alergias": [
    {
      question: "¿Tratan alergias en la piel y respiratorias?",
      answer: "Sí, evaluamos y tratamos alergias respiratorias (rinitis, congestión) y de la piel (ronchas, comezón).",
      questionEn: "Do you treat both skin and respiratory allergies?",
      answerEn: "Yes, we evaluate and treat respiratory allergies (rhinitis, congestion) and skin allergies (hives, itching).",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "enfermedades-respiratorias": [
    {
      question: "¿Hacen prueba de flu y de COVID el mismo día?",
      answer: "Sí, hacemos pruebas rápidas de influenza y COVID y te damos el resultado y el tratamiento el mismo día.",
      questionEn: "Do you test for flu and COVID the same day?",
      answerEn: "Yes, we run rapid flu and COVID tests and give you the result and treatment the same day.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "examen-fisico-escolar": [
    {
      question: "¿Llenan el formulario de la escuela o el equipo?",
      answer: "Sí, trae el formulario de tu escuela o equipo deportivo y lo completamos durante la visita.",
      questionEn: "Do you fill out the school or team form?",
      answerEn: "Yes, bring your school or sports-team form and we complete it during the visit.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "ginecologia": [
    {
      question: "¿Necesito cita para el papanicolaou?",
      answer: "No es obligatorio, atendemos sin cita; pero puedes llamarnos para reservar un horario cómodo.",
      questionEn: "Do I need an appointment for a Pap smear?",
      answerEn: "It's not required, we welcome walk-ins; but you can call us to reserve a convenient time.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "prueba-embarazo": [
    {
      question: "¿Qué tan confiable es la prueba de embarazo?",
      answer: "Nuestras pruebas son confiables y las confirma personal médico; también podemos orientarte sobre los siguientes pasos.",
      questionEn: "How reliable is the pregnancy test?",
      answerEn: "Our tests are reliable and confirmed by medical staff; we can also guide you on next steps.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "anticonceptivos": [
    {
      question: "¿Qué métodos anticonceptivos ofrecen?",
      answer: "Ofrecemos orientación, pastillas anticonceptivas e inyección, y te ayudamos a elegir el método adecuado para ti.",
      questionEn: "What contraceptive methods do you offer?",
      answerEn: "We offer guidance, birth control pills and the injection, and help you choose the right method for you.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "extraccion-implantes": [
    {
      question: "¿Duele la extracción del implante?",
      answer: "Se realiza con anestesia local, por lo que las molestias son mínimas. El procedimiento toma pocos minutos.",
      questionEn: "Does implant removal hurt?",
      answerEn: "It's done with local anesthesia, so discomfort is minimal. The procedure takes just a few minutes.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "salud-hombre": [
    {
      question: "¿Qué incluye el examen del hombre?",
      answer: "Incluye antígeno prostático (PSA), nivel de testosterona y un chequeo general, con resultados explicados en español.",
      questionEn: "What does the men's exam include?",
      answerEn: "It includes prostate antigen (PSA), testosterone level and a general checkup, with results explained in Spanish.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "examenes-sangre": [
    {
      question: "¿Qué análisis de sangre me conviene hacerme?",
      answer: "Depende de tu edad, tus síntomas y tus antecedentes. En la consulta el médico te dice si basta con una biometría y un panel metabólico o si conviene agregar A1C, lípidos, tiroides o vitaminas.",
      questionEn: "Which blood tests should I get?",
      answerEn: "It depends on your age, symptoms and history. During the visit the doctor tells you whether a CBC and metabolic panel are enough or whether to add A1C, lipids, thyroid or vitamins.",
    },
    {
      question: "¿Puedo desayunar antes del análisis?",
      answer: "Solo si tu estudio no pide ayuno. Para glucosa en ayunas y algunos paneles no debes comer durante 8 a 12 horas; el agua sí está permitida. Llámanos y te confirmamos.",
      questionEn: "Can I eat breakfast before the test?",
      answerEn: "Only if your test does not require fasting. For fasting glucose and some panels, do not eat for 8 to 12 hours; water is fine. Call us and we will confirm.",
    },
    {
      question: "¿Quién me explica los resultados?",
      answer: "El médico de la clínica revisa los resultados contigo en español o inglés y te dice si necesitas tratamiento, repetir algún estudio o seguimiento.",
      questionEn: "Who explains my results?",
      answerEn: "The clinic doctor reviews the results with you in Spanish or English and tells you whether you need treatment, a repeat test or follow-up.",
    },
  ],
  "infecciones-urinarias": [
    {
      question: "¿Puedo recibir tratamiento el mismo día?",
      answer: "Sí, hacemos el examen de orina y, si hay infección, iniciamos el tratamiento el mismo día.",
      questionEn: "Can I get treatment the same day?",
      answerEn: "Yes, we run the urine test and, if there's an infection, we start treatment the same day.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "examen-heces": [
    {
      question: "¿Cómo se toma la muestra de heces?",
      answer: "Te entregamos un recipiente e instrucciones claras para recolectar la muestra en casa y traerla a la clínica.",
      questionEn: "How is the stool sample collected?",
      answerEn: "We give you a container and clear instructions to collect the sample at home and bring it to the clinic.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "prueba-strep": [
    {
      question: "¿Cuánto tarda el resultado del strep test?",
      answer: "La prueba rápida de estreptococo da resultado en pocos minutos durante tu visita.",
      questionEn: "How long does the strep test take?",
      answerEn: "The rapid strep test gives a result in just a few minutes during your visit.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "prueba-tuberculosis": [
    {
      question: "¿Tengo que regresar para leer la prueba de TB?",
      answer: "Sí, la prueba cutánea (PPD) se lee entre 48 y 72 horas después de aplicarla; te damos la cita de lectura.",
      questionEn: "Do I have to come back to read the TB test?",
      answerEn: "Yes, the skin test (PPD) is read 48 to 72 hours after it's placed; we schedule your reading appointment.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "enfermedades-transmision-sexual": [
    {
      question: "¿Las pruebas son confidenciales?",
      answer: "Sí, todas las pruebas de STD son completamente confidenciales y se realizan con respeto y sin juicios.",
      questionEn: "Is the testing confidential?",
      answerEn: "Yes, all STD testing is completely confidential and done with respect and without judgment.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "examen-alcohol-drogas": [
    {
      question: "¿Entregan documentación para el trabajo?",
      answer: "Sí, te entregamos la documentación del resultado para tu empleador o trámite.",
      questionEn: "Do you provide documentation for work?",
      answerEn: "Yes, we give you documentation of the result for your employer or paperwork.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "electrocardiograma": [
    {
      question: "¿El electrocardiograma duele?",
      answer: "No, es un estudio rápido y sin dolor; solo se colocan electrodos en la piel por unos minutos.",
      questionEn: "Does the EKG hurt?",
      answerEn: "No, it's a fast, painless test; electrodes are simply placed on the skin for a few minutes.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "ultrasonido": [
    {
      question: "¿El ultrasonido tiene radiación?",
      answer: "No, el ultrasonido no usa radiación, por lo que es seguro incluso durante el embarazo.",
      questionEn: "Does ultrasound use radiation?",
      answerEn: "No, ultrasound uses no radiation, so it's safe even during pregnancy.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "examen-dot": [
    {
      question: "¿Cuánto dura el certificado médico DOT?",
      answer: "Hasta 24 meses si cumples todos los requisitos. Con presión alta, diabetes u otra condición que requiere control, el certificado puede ser de menos tiempo.",
      questionEn: "How long is the DOT medical certificate valid?",
      answerEn: "Up to 24 months if you meet all requirements. With high blood pressure, diabetes or another condition that needs monitoring, it may be shorter.",
    },
    {
      question: "¿Puedo pasar el examen DOT si uso insulina?",
      answer: "Sí, es posible. Debes traer el formulario MCSA-5870 llenado por el médico que trata tu diabetes en los 45 días anteriores al examen.",
      questionEn: "Can I pass the DOT exam if I use insulin?",
      answerEn: "Yes, it is possible. Bring form MCSA-5870 completed by the doctor who treats your diabetes within 45 days before the exam.",
    },
    {
      question: "¿El análisis de orina del DOT es una prueba de drogas?",
      answer: "No. El análisis de orina del examen físico busca proteína, sangre o azúcar. La prueba de drogas DOT es un trámite aparte.",
      questionEn: "Is the DOT urinalysis a drug test?",
      answerEn: "No. The physical exam urinalysis checks for protein, blood or sugar. The DOT drug test is a separate process.",
    },
  ],
  "examenes-inmigracion": [
    {
      question: "¿Me entregan el I-693 el mismo día?",
      answer: "Por lo general no. Algunas pruebas, como la de tuberculosis, tardan unos días. Cuando están todos los resultados, el civil surgeon firma el formulario y te lo entrega en sobre sellado.",
      questionEn: "Do I get Form I-693 the same day?",
      answerEn: "Usually not. Some tests, like the tuberculosis test, take a few days. Once all results are in, the civil surgeon signs the form and gives it to you in a sealed envelope.",
    },
    {
      question: "¿Necesito la vacuna del COVID-19 para el examen?",
      answer: "No. USCIS dejó de exigirla en enero de 2025 y el CDC la retiró de sus instrucciones en marzo de 2025. Las demás vacunas dependen de tu edad y de tus registros.",
      questionEn: "Do I need the COVID-19 vaccine for the exam?",
      answerEn: "No. USCIS stopped requiring it in January 2025 and the CDC removed it from its instructions in March 2025. Other vaccines depend on your age and records.",
    },
    {
      question: "¿Puedo mandar el I-693 después del I-485?",
      answer: "Desde el 2 de diciembre de 2024 debe presentarse junto con el I-485; si lo envías por separado, USCIS puede rechazar la solicitud. Coordina la fecha del examen con tu abogado.",
      questionEn: "Can I send Form I-693 after the I-485?",
      answerEn: "Since December 2, 2024 it must be filed together with the I-485; if you send it separately, USCIS may reject the application. Coordinate the exam date with your attorney.",
    },
  ],
  "vacunas": [
    {
      question: "¿Qué vacunas aplican?",
      answer: "Aplicamos la vacuna contra la influenza (flu) y el toxoide tetánico; pregúntanos cuál te conviene.",
      questionEn: "Which vaccines do you give?",
      answerEn: "We administer the influenza (flu) vaccine and tetanus toxoid; ask us which one you need.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "sueros-vitaminados": [
    {
      question: "¿Quién aplica el suero vitaminado?",
      answer: "Lo aplica y supervisa personal médico, tras una breve evaluación para elegir el suero adecuado para ti.",
      questionEn: "Who administers the vitamin IV?",
      answerEn: "It's administered and monitored by medical staff, after a brief evaluation to choose the right drip for you.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "suturas-heridas": [
    {
      question: "¿Atienden heridas sin cita?",
      answer: "Sí, atendemos cortes y heridas sin cita previa; entre más pronto, menor el riesgo de infección.",
      questionEn: "Do you treat wounds without an appointment?",
      answerEn: "Yes, we treat cuts and wounds on a walk-in basis; the sooner, the lower the risk of infection.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "curacion-heridas": [
    {
      question: "¿Hacen cambios de vendaje y seguimiento?",
      answer: "Sí, limpiamos, curamos y cambiamos los vendajes, y damos seguimiento hasta que la herida cicatrice.",
      questionEn: "Do you do dressing changes and follow-up?",
      answerEn: "Yes, we clean, treat and change the dressings, and follow up until the wound heals.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "cirugias-menores": [
    {
      question: "¿Qué cirugías menores realizan?",
      answer: "Realizamos extracción de lunares, quistes y lipomas, entre otros procedimientos ambulatorios con anestesia local.",
      questionEn: "What minor surgeries do you perform?",
      answerEn: "We perform removal of moles, cysts and lipomas, among other outpatient procedures with local anesthesia.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "drenaje-abscesos": [
    {
      question: "¿El drenaje de un absceso duele?",
      answer: "Se realiza con anestesia local para reducir las molestias y aliviar el dolor del absceso rápidamente.",
      questionEn: "Does abscess drainage hurt?",
      answerEn: "It's done with local anesthesia to reduce discomfort and quickly relieve the abscess pain.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "unas-encarnadas": [
    {
      question: "¿Cómo tratan la uña encarnada?",
      answer: "Con un procedimiento sencillo y anestesia local retiramos la porción encarnada para aliviar el dolor el mismo día.",
      questionEn: "How do you treat an ingrown toenail?",
      answerEn: "With a simple procedure and local anesthesia we remove the ingrown portion to relieve pain the same day.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "farmacia": [
    {
      question: "¿Puedo surtir mi receta en la clínica?",
      answer: "Sí, al terminar tu consulta surtimos tu receta en nuestra farmacia, sin tener que ir a otro lugar.",
      questionEn: "Can I fill my prescription at the clinic?",
      answerEn: "Yes, after your visit we fill your prescription at our pharmacy, with no need to go elsewhere.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
};

export function getServiceFaqs(slug: string): ServiceFaq[] {
  return SERVICE_FAQS[slug] ?? [];
}
