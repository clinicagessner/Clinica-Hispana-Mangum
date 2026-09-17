import type { ServiceFaq } from "@/types";

/**
 * FAQs por servicio (clave = slug). Bilingüe. Se usan en la página de
 * detalle del servicio y para el JSON-LD FAQPage.
 */
export const SERVICE_FAQS: Record<string, ServiceFaq[]> = {
  "condiciones-cronicas": [
    {
      question: "¿Cada cuánto debo hacerme exámenes de control?",
      answer: "Mientras se ajusta el tratamiento, cada 1 a 3 meses; cuando estás en meta, por lo general cada 3 a 6 meses. El equipo médico te da tu calendario.",
      questionEn: "How often should I get follow-up tests?",
      answerEn: "While treatment is being adjusted, every 1 to 3 months; once you are at goal, usually every 3 to 6 months. The medical team gives you your schedule.",
    },
    {
      question: "¿Tengo que dejar de comer tortillas o arroz?",
      answer: "No necesariamente. Se trata de ajustar porciones y combinarlas con verduras y proteína. Te ayudamos a armar un plan con tu comida de siempre.",
      questionEn: "Do I have to stop eating tortillas or rice?",
      answerEn: "Not necessarily. It is about adjusting portions and pairing them with vegetables and protein. We help you build a plan with your usual food.",
    },
    {
      question: "¿Qué traigo a mi cita de control?",
      answer: "Tus medicamentos o la lista con dosis, tu glucómetro o registro de azúcar, y tus lecturas de presión de casa si las tomas.",
      questionEn: "What should I bring to my follow-up visit?",
      answerEn: "Your medications or a list with doses, your glucose meter or sugar log, and your home blood pressure readings if you take them.",
    },
  ],
  "tiroides": [
    {
      question: "¿Qué prueba se usa para revisar la tiroides?",
      answer: "La principal es la TSH. Si sale alterada, se agregan T4 libre y a veces T3 para saber si la tiroides trabaja lento o acelerado.",
      questionEn: "Which test is used to check the thyroid?",
      answerEn: "The main one is TSH. If it is abnormal, free T4 and sometimes T3 are added to see whether the thyroid is slow or overactive.",
    },
    {
      question: "¿Necesito ayuno para la prueba de tiroides?",
      answer: "No. Si ya tomas levotiroxina, pregunta si conviene tomar la pastilla después de la muestra ese día.",
      questionEn: "Do I need to fast for a thyroid test?",
      answerEn: "No. If you already take levothyroxine, ask whether to take your pill after the blood draw that day.",
    },
    {
      question: "¿Cómo debo tomar la pastilla de tiroides?",
      answer: "En ayunas, con agua, entre 30 y 60 minutos antes del desayuno, y separada al menos 4 horas del calcio, el hierro o los antiácidos.",
      questionEn: "How should I take my thyroid pill?",
      answerEn: "On an empty stomach with water, 30 to 60 minutes before breakfast, and at least 4 hours apart from calcium, iron or antacids.",
    },
  ],
  "alergias": [
    {
      question: "¿Tratan alergias en la piel y respiratorias?",
      answer: "Sí. Atendemos rinitis, congestión y estornudos, y también ronchas, comezón y eccema.",
      questionEn: "Do you treat skin and respiratory allergies?",
      answerEn: "Yes. We treat rhinitis, congestion and sneezing, as well as hives, itching and eczema.",
    },
    {
      question: "¿Por qué las alergias duran casi todo el año en Houston?",
      answer: "Porque hay polen de árboles en invierno y primavera, de pasto en verano y de ambrosía en otoño, además de moho por la humedad.",
      questionEn: "Why do allergies last most of the year in Houston?",
      answerEn: "Because there is tree pollen in winter and spring, grass pollen in summer and ragweed in fall, plus mold from the humidity.",
    },
    {
      question: "¿Cuándo una reacción alérgica es una emergencia?",
      answer: "Cuando hay hinchazón de labios, lengua o garganta, dificultad para respirar o mareo. En ese caso llama al 911 de inmediato.",
      questionEn: "When is an allergic reaction an emergency?",
      answerEn: "When there is swelling of the lips, tongue or throat, trouble breathing or dizziness. In that case, call 911 right away.",
    },
  ],
  "enfermedades-respiratorias": [
    {
      question: "¿Hacen prueba de flu y de COVID el mismo día?",
      answer: "Sí. Hacemos las pruebas rápidas durante tu visita y el equipo médico te explica el resultado y el tratamiento ese mismo día.",
      questionEn: "Do you test for flu and COVID the same day?",
      answerEn: "Yes. We run the rapid tests during your visit and the medical team explains the result and treatment that same day.",
    },
    {
      question: "¿Necesito antibiótico para la gripe?",
      answer: "No. La gripe y el COVID son virus y los antibióticos no los curan. Solo se usan si hay una infección bacteriana, como faringitis por estreptococo.",
      questionEn: "Do I need an antibiotic for the flu?",
      answerEn: "No. Flu and COVID are viruses and antibiotics do not cure them. They are only used for a bacterial infection, such as strep throat.",
    },
    {
      question: "¿Cuándo puedo volver al trabajo o a la escuela?",
      answer: "Cuando tus síntomas mejoran y llevas 24 horas sin fiebre sin tomar medicamento para bajarla.",
      questionEn: "When can I go back to work or school?",
      answerEn: "When your symptoms are improving and you have been fever-free for 24 hours without fever-reducing medicine.",
    },
  ],
  "examen-fisico-escolar": [
    {
      question: "¿Llenan el formulario de la escuela o del equipo?",
      answer: "Sí. Trae el formulario de la escuela o la liga y lo completamos durante la visita.",
      questionEn: "Do you fill out the school or team form?",
      answerEn: "Yes. Bring the school or league form and we complete it during the visit.",
    },
    {
      question: "¿Mi hijo puede venir solo al examen?",
      answer: "No. Los menores de edad deben venir con su padre, madre o tutor legal, que firma la autorización.",
      questionEn: "Can my child come to the exam alone?",
      answerEn: "No. Minors must come with a parent or legal guardian, who signs the consent.",
    },
    {
      question: "¿Qué pasa si falta una vacuna?",
      answer: "El equipo médico revisa la cartilla y te indica qué vacuna falta y dónde aplicarla para completar el requisito de la escuela.",
      questionEn: "What if a vaccine is missing?",
      answerEn: "The medical team reviews the record and tells you which vaccine is missing and where to get it to meet the school requirement.",
    },
  ],
  "ginecologia": [
    {
      question: "¿Puedo hacerme el Papanicolaou si estoy en mi periodo?",
      answer: "Es mejor esperar a que termine, porque la sangre puede alterar la muestra. Programa tu visita unos días después de tu regla y antes de la siguiente.",
      questionEn: "Can I get a Pap smear during my period?",
      answerEn: "It is better to wait until it ends, because blood can affect the sample. Schedule your visit a few days after your period and before the next one.",
    },
    {
      question: "¿Qué diferencia hay entre el Papanicolaou y el cultivo vaginal?",
      answer: "El Papanicolaou busca cambios en las células del cuello del útero. El cultivo identifica qué microbio causa una infección, para elegir el tratamiento adecuado.",
      questionEn: "What is the difference between a Pap smear and a vaginal culture?",
      answerEn: "A Pap smear looks for changes in cervical cells. A culture identifies which germ is causing an infection, so the right treatment can be chosen.",
    },
    {
      question: "¿Puedo pedir que me acompañe alguien durante la revisión?",
      answer: "Sí. Puedes venir acompañada o pedir que otra persona del equipo médico de la clínica esté presente durante la revisión. Si tienes alguna preferencia, llámanos al (832) 834-5507 antes de venir.",
      questionEn: "Can someone be with me during the exam?",
      answerEn: "Yes. You can bring someone or ask for another member of the clinic's medical team to be present during the exam. If you have a preference, call us at (832) 834-5507 before you come.",
    },
  ],
  "prueba-embarazo": [
    {
      question: "¿Qué tan pronto puedo hacerme la prueba de embarazo?",
      answer: "La prueba en orina es confiable desde el primer día de retraso de la regla. La de sangre detecta el embarazo unos días antes.",
      questionEn: "How soon can I take a pregnancy test?",
      answerEn: "A urine test is reliable from the first day of a missed period. A blood test detects pregnancy a few days earlier.",
    },
    {
      question: "¿Qué hago si la prueba sale positiva?",
      answer: "Empieza a tomar ácido fólico si no lo tomas y agenda tu control prenatal. El equipo médico te orienta sobre el ultrasonido y la referencia a obstetricia.",
      questionEn: "What should I do if the test is positive?",
      answerEn: "Start taking folic acid if you are not already and schedule prenatal care. The medical team guides you on ultrasound and an obstetrics referral.",
    },
    {
      question: "¿El resultado es confidencial?",
      answer: "Sí. El resultado es privado y solo se comparte contigo.",
      questionEn: "Is the result confidential?",
      answerEn: "Yes. The result is private and shared only with you.",
    },
  ],
  "anticonceptivos": [
    {
      question: "¿Qué métodos anticonceptivos ofrecen?",
      answer: "En la clínica ofrecemos pastillas e inyección anticonceptiva, y orientación sobre el implante y el DIU con referencia si eliges uno de ellos.",
      questionEn: "Which birth control methods do you offer?",
      answerEn: "At the clinic we offer birth control pills and the shot, plus guidance on the implant and IUD with a referral if you choose one.",
    },
    {
      question: "¿Cada cuánto se aplica la inyección anticonceptiva?",
      answer: "Cada 3 meses. Anota la fecha de tu próxima dosis; si te pasas, usa condón y consulta antes de la siguiente aplicación.",
      questionEn: "How often is the birth control shot given?",
      answerEn: "Every 3 months. Write down your next dose date; if you are late, use condoms and check with us before the next shot.",
    },
    {
      question: "¿Las pastillas protegen contra infecciones sexuales?",
      answer: "No. Las pastillas y la inyección solo previenen el embarazo. Para protegerte de infecciones de transmisión sexual usa condón.",
      questionEn: "Do pills protect against sexually transmitted infections?",
      answerEn: "No. Pills and the shot only prevent pregnancy. Use condoms to protect against sexually transmitted infections.",
    },
  ],
  "extraccion-implantes": [
    {
      question: "¿Duele la extracción del implante?",
      answer: "Se hace con anestesia local, así que solo se siente el piquete inicial y algo de presión. Después puede quedar un pequeño moretón.",
      questionEn: "Does implant removal hurt?",
      answerEn: "It is done with local anesthesia, so you only feel the first pinch and some pressure. A small bruise may remain afterward.",
    },
    {
      question: "¿Qué pasa si no se siente el implante en el brazo?",
      answer: "Antes de retirarlo hay que ubicarlo con un estudio de imagen. El equipo médico te indica cómo hacerlo o te da la referencia.",
      questionEn: "What if the implant cannot be felt in the arm?",
      answerEn: "It must be located with an imaging study before removal. The medical team tells you how to arrange it or gives you a referral.",
    },
    {
      question: "¿Cuándo puedo quedar embarazada después de quitarlo?",
      answer: "La fertilidad regresa pronto después de la extracción. Si no buscas embarazo, empieza otro método ese mismo día.",
      questionEn: "When can I get pregnant after removal?",
      answerEn: "Fertility returns soon after removal. If you do not want to get pregnant, start another method that same day.",
    },
  ],
  "salud-hombre": [
    {
      question: "¿El PSA duele o necesita ayuno?",
      answer: "Es una toma de sangre normal del brazo y no requiere ayuno. Solo evita el ejercicio intenso y andar en bicicleta los 2 días anteriores, porque pueden subir el resultado.",
      questionEn: "Does the PSA test hurt or require fasting?",
      answerEn: "It is a normal blood draw from the arm and does not require fasting. Just avoid hard exercise and cycling for 2 days before, because they can raise the result.",
    },
    {
      question: "Si mi PSA sale alto, ¿tengo cáncer?",
      answer: "No necesariamente. El PSA también sube con infecciones, crecimiento benigno de la próstata o ejercicio reciente. El equipo médico te dice si hay que repetirlo o si conviene ver al urólogo.",
      questionEn: "If my PSA is high, do I have cancer?",
      answerEn: "Not necessarily. PSA also rises with infections, benign prostate enlargement or recent exercise. The medical team tells you whether to repeat it or see a urologist.",
    },
    {
      question: "¿Cuándo tienen sentido los análisis hormonales?",
      answer: "Cuando hay cansancio persistente, poca energía, cambios de ánimo u otros síntomas. El equipo médico de la clínica decide qué pruebas pedir después de revisarte.",
      questionEn: "When do hormone tests make sense?",
      answerEn: "When there is persistent fatigue, low energy, mood changes or other symptoms. The clinic's medical team decides which tests to order after examining you.",
    },
  ],
  "examenes-sangre": [
    {
      question: "¿Qué análisis de sangre me conviene hacerme?",
      answer: "Depende de tu edad, tus síntomas y tus antecedentes. En la consulta el equipo médico te dice si basta con una biometría y un panel metabólico o si conviene agregar A1C, lípidos, tiroides o vitaminas.",
      questionEn: "Which blood tests should I get?",
      answerEn: "It depends on your age, symptoms and history. During the visit the medical team tells you whether a CBC and metabolic panel are enough or whether to add A1C, lipids, thyroid or vitamins.",
    },
    {
      question: "¿Puedo desayunar antes del análisis?",
      answer: "Solo si tu estudio no pide ayuno. Para glucosa en ayunas y algunos paneles no debes comer durante 8 a 12 horas; el agua sí está permitida. Llámanos y te confirmamos.",
      questionEn: "Can I eat breakfast before the test?",
      answerEn: "Only if your test does not require fasting. For fasting glucose and some panels, do not eat for 8 to 12 hours; water is fine. Call us and we will confirm.",
    },
    {
      question: "¿Quién me explica los resultados?",
      answer: "El equipo médico de la clínica revisa los resultados contigo en español o inglés y te dice si necesitas tratamiento, repetir algún estudio o seguimiento.",
      questionEn: "Who explains my results?",
      answerEn: "The clinic's medical team reviews the results with you in Spanish or English and tells you whether you need treatment, a repeat test or follow-up.",
    },
  ],
  "infecciones-urinarias": [
    {
      question: "¿Puedo recibir tratamiento el mismo día?",
      answer: "Sí. Hacemos el examen de orina durante tu visita y, si hay infección, el equipo médico inicia el tratamiento ese mismo día.",
      questionEn: "Can I get treatment the same day?",
      answerEn: "Yes. We run the urine test during your visit and, if there is an infection, the medical team starts treatment that same day.",
    },
    {
      question: "¿Cuándo una infección urinaria es urgente?",
      answer: "Cuando hay fiebre, escalofríos, dolor en la espalda o un costado, náuseas o vómito, porque puede estar afectando el riñón.",
      questionEn: "When is a urinary infection urgent?",
      answerEn: "When there is fever, chills, back or side pain, nausea or vomiting, because it may be affecting the kidney.",
    },
    {
      question: "¿Por qué me repiten las infecciones urinarias?",
      answer: "Puede influir tomar poca agua, aguantar la orina o no terminar el antibiótico. Si se repiten, se envía un cultivo para elegir el tratamiento correcto.",
      questionEn: "Why do my urinary infections keep coming back?",
      answerEn: "Drinking little water, holding urine or not finishing antibiotics can play a role. If they recur, a culture is sent to choose the right treatment.",
    },
  ],
  "examen-heces": [
    {
      question: "¿Cómo se toma la muestra de heces?",
      answer: "Te damos un recipiente con instrucciones: recoge las heces en un recipiente limpio, no del agua del inodoro, pasa una porción al frasco y tráelo el mismo día.",
      questionEn: "How is the stool sample collected?",
      answerEn: "We give you a container with instructions: catch the stool in a clean container, not from the toilet water, transfer a portion to the vial and bring it the same day.",
    },
    {
      question: "¿El examen de heces detecta parásitos?",
      answer: "Sí. Puede detectar parásitos como giardia o amibas, además de bacterias y sangre oculta.",
      questionEn: "Does the stool test detect parasites?",
      answerEn: "Yes. It can detect parasites such as giardia or amoebas, as well as bacteria and hidden blood.",
    },
    {
      question: "¿Sirve para revisar el cáncer de colon?",
      answer: "La prueba de sangre oculta en heces (FIT) es una de las opciones de detección para adultos de 45 a 75 años. Si sale positiva, se necesita una colonoscopia.",
      questionEn: "Can it screen for colon cancer?",
      answerEn: "The fecal immunochemical test (FIT) is one screening option for adults aged 45 to 75. If it is positive, a colonoscopy is needed.",
    },
  ],
  "prueba-strep": [
    {
      question: "¿Cuánto tarda el resultado del strep test?",
      answer: "La prueba rápida da resultado en pocos minutos durante tu visita. En niños, si sale negativa y la sospecha es alta, se confirma con cultivo.",
      questionEn: "How long does the strep test take?",
      answerEn: "The rapid test gives a result in a few minutes during your visit. In children, if it is negative and suspicion is high, a culture confirms it.",
    },
    {
      question: "¿Cuándo puede volver mi hijo a la escuela?",
      answer: "Cuando ya no tiene fiebre y lleva al menos 12 horas tomando el antibiótico.",
      questionEn: "When can my child go back to school?",
      answerEn: "Once they have no fever and have taken the antibiotic for at least 12 hours.",
    },
    {
      question: "¿Todo dolor de garganta necesita antibiótico?",
      answer: "No. La mayoría son virales y los antibióticos no ayudan. Solo se usan si la prueba confirma estreptococo u otra infección bacteriana.",
      questionEn: "Does every sore throat need antibiotics?",
      answerEn: "No. Most are viral and antibiotics do not help. They are only used if the test confirms strep or another bacterial infection.",
    },
  ],
  "prueba-tuberculosis": [
    {
      question: "¿Tengo que regresar para leer la prueba de TB?",
      answer: "Sí. La prueba cutánea se lee entre 48 y 72 horas después de aplicarla. Si no regresas en ese plazo, hay que repetirla.",
      questionEn: "Do I have to come back to read the TB test?",
      answerEn: "Yes. The skin test is read 48 to 72 hours after it is placed. If you do not return in that window, it must be repeated.",
    },
    {
      question: "¿Un resultado positivo significa que tengo tuberculosis?",
      answer: "No necesariamente. Indica contacto con la bacteria; se necesita una radiografía de tórax y revisar síntomas para descartar enfermedad activa.",
      questionEn: "Does a positive result mean I have tuberculosis?",
      answerEn: "Not necessarily. It shows contact with the bacteria; a chest X-ray and symptom review are needed to rule out active disease.",
    },
    {
      question: "¿Sirve la prueba cutánea para inmigración?",
      answer: "No. Para el formulario I-693 el CDC pide una prueba de tuberculosis en sangre (IGRA), que se hace como parte del examen de inmigración.",
      questionEn: "Is the skin test accepted for immigration?",
      answerEn: "No. For Form I-693 the CDC requires a tuberculosis blood test (IGRA), done as part of the immigration exam.",
    },
  ],
  "enfermedades-transmision-sexual": [
    {
      question: "¿Las pruebas son confidenciales?",
      answer: "Sí. Las pruebas y los resultados son confidenciales y se hablan solo contigo, con respeto y sin juicios.",
      questionEn: "Is testing confidential?",
      answerEn: "Yes. Tests and results are confidential and discussed only with you, respectfully and without judgment.",
    },
    {
      question: "¿Puedo tener una infección sin síntomas?",
      answer: "Sí. La clamidia, la gonorrea y la sífilis a menudo no dan síntomas al principio. Por eso conviene hacerse la prueba aunque te sientas bien.",
      questionEn: "Can I have an infection without symptoms?",
      answerEn: "Yes. Chlamydia, gonorrhea and syphilis often cause no symptoms at first. That is why testing is worthwhile even if you feel fine.",
    },
    {
      question: "¿Mi pareja también debe tratarse?",
      answer: "Sí. Si tu resultado es positivo, tu pareja o parejas deben revisarse y tratarse para evitar volver a contagiarte.",
      questionEn: "Does my partner need treatment too?",
      answerEn: "Yes. If your result is positive, your partner or partners should be checked and treated to avoid reinfection.",
    },
  ],
  "examen-alcohol-drogas": [
    {
      question: "¿Entregan documentación para el trabajo?",
      answer: "Sí. Te entregamos la documentación del resultado para tu empleador o trámite.",
      questionEn: "Do you provide documentation for work?",
      answerEn: "Yes. We give you documentation of the result for your employer or paperwork.",
    },
    {
      question: "¿Puedo dar positivo por un medicamento con receta?",
      answer: "Algunos medicamentos para el dolor, la ansiedad o el TDAH pueden dar positivo. Avisa cuáles tomas y trae la receta o el frasco.",
      questionEn: "Can a prescription medication make me test positive?",
      answerEn: "Some medications for pain, anxiety or ADHD can test positive. Tell us which ones you take and bring the prescription or bottle.",
    },
    {
      question: "¿Por qué no debo tomar mucha agua antes de la prueba?",
      answer: "Porque la orina muy diluida puede ser rechazada y habría que repetir la prueba.",
      questionEn: "Why should I avoid drinking a lot of water before the test?",
      answerEn: "Because very diluted urine may be rejected and the test would have to be repeated.",
    },
  ],
  "electrocardiograma": [
    {
      question: "¿El electrocardiograma duele?",
      answer: "No. Solo se colocan electrodos adhesivos en la piel durante unos minutos; no hay agujas ni radiación.",
      questionEn: "Does an electrocardiogram hurt?",
      answerEn: "No. Adhesive electrodes are simply placed on the skin for a few minutes; there are no needles or radiation.",
    },
    {
      question: "¿Cuánto tarda el electrocardiograma?",
      answer: "El registro dura segundos y todo el proceso suele tomar alrededor de 10 minutos.",
      questionEn: "How long does an electrocardiogram take?",
      answerEn: "The recording takes seconds and the whole process usually takes about 10 minutes.",
    },
    {
      question: "¿Qué hago si tengo dolor de pecho?",
      answer: "Si es dolor u opresión con falta de aire, sudor frío o dolor que se va al brazo o la mandíbula, llama al 911 en lugar de venir a la clínica.",
      questionEn: "What should I do if I have chest pain?",
      answerEn: "If it is pain or pressure with shortness of breath, cold sweats or pain spreading to the arm or jaw, call 911 instead of coming to the clinic.",
    },
  ],
  "ultrasonido": [
    {
      question: "¿El ultrasonido tiene radiación?",
      answer: "No. Usa ondas de sonido, por eso es seguro incluso durante el embarazo.",
      questionEn: "Does ultrasound use radiation?",
      answerEn: "No. It uses sound waves, which is why it is safe even during pregnancy.",
    },
    {
      question: "¿Tengo que ir en ayunas al ultrasonido?",
      answer: "Solo para el abdominal, con 6 a 8 horas de ayuno. Para el pélvico necesitas la vejiga llena, y el de tiroides no requiere preparación.",
      questionEn: "Do I need to fast for the ultrasound?",
      answerEn: "Only for an abdominal study, with 6 to 8 hours of fasting. A pelvic study needs a full bladder, and a thyroid study needs no preparation.",
    },
    {
      question: "¿Cuánto dura el estudio?",
      answer: "La mayoría de los ultrasonidos toman entre 15 y 30 minutos.",
      questionEn: "How long does the study take?",
      answerEn: "Most ultrasound studies take 15 to 30 minutes.",
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
      question: "¿Qué vacunas aplican en la clínica?",
      answer: "Aplicamos la vacuna contra la influenza y el refuerzo contra el tétanos, y te orientamos sobre otras vacunas según tu edad.",
      questionEn: "Which vaccines do you give at the clinic?",
      answerEn: "We give the flu vaccine and the tetanus booster, and guide you on other vaccines for your age.",
    },
    {
      question: "¿Cada cuánto necesito la vacuna del tétanos?",
      answer: "Cada 10 años. Si tienes una herida sucia o profunda y tu última dosis fue hace más de 5 años, conviene un refuerzo pronto.",
      questionEn: "How often do I need a tetanus shot?",
      answerEn: "Every 10 years. If you have a dirty or deep wound and your last dose was more than 5 years ago, a booster soon is recommended.",
    },
    {
      question: "¿Puedo vacunarme si tengo gripa?",
      answer: "Con un resfriado leve sí. Si tienes fiebre alta, es mejor esperar a sentirte mejor.",
      questionEn: "Can I get vaccinated if I have a cold?",
      answerEn: "Yes, with a mild cold. If you have a high fever, it is better to wait until you feel better.",
    },
  ],
  "sueros-vitaminados": [
    {
      question: "¿Quién aplica el suero vitaminado?",
      answer: "Lo aplica y vigila el equipo médico de la clínica, después de una evaluación breve de tu salud, medicamentos y alergias.",
      questionEn: "Who gives the IV vitamin therapy?",
      answerEn: "The clinic's medical team gives and monitors it, after a brief review of your health, medications and allergies.",
    },
    {
      question: "¿Cuánto tarda la aplicación del suero?",
      answer: "Normalmente entre 30 y 60 minutos, sentado y en observación.",
      questionEn: "How long does the IV take?",
      answerEn: "Usually 30 to 60 minutes, seated and under observation.",
    },
    {
      question: "¿Cualquier persona puede ponerse un suero?",
      answer: "No. Personas con insuficiencia cardiaca, enfermedad renal, presión muy alta sin control o embarazo necesitan una valoración cuidadosa antes.",
      questionEn: "Can anyone get an IV?",
      answerEn: "No. People with heart failure, kidney disease, uncontrolled high blood pressure or pregnancy need a careful evaluation first.",
    },
  ],
  "suturas-heridas": [
    {
      question: "¿Atienden heridas sin cita?",
      answer: "Sí. Atendemos cortadas y heridas sin cita; mientras más pronto vengas, menor el riesgo de infección.",
      questionEn: "Do you treat wounds without an appointment?",
      answerEn: "Yes. We treat cuts and wounds with no appointment; the sooner you come, the lower the infection risk.",
    },
    {
      question: "¿Cuándo me quitan los puntos?",
      answer: "Depende de la zona: unos 5 días en la cara, 7 a 10 en brazos y cuero cabelludo, y 10 a 14 en piernas, pies o articulaciones.",
      questionEn: "When will my stitches be removed?",
      answerEn: "It depends on the area: about 5 days on the face, 7 to 10 on the arms and scalp, and 10 to 14 on the legs, feet or joints.",
    },
    {
      question: "¿Necesito la vacuna del tétanos por una cortada?",
      answer: "Si la herida es sucia o profunda y tu última dosis fue hace más de 5 años, sí conviene un refuerzo. El equipo médico lo revisa en la visita.",
      questionEn: "Do I need a tetanus shot for a cut?",
      answerEn: "If the wound is dirty or deep and your last dose was more than 5 years ago, a booster is recommended. The medical team checks during the visit.",
    },
  ],
  "curacion-heridas": [
    {
      question: "¿Hacen cambios de vendaje y seguimiento?",
      answer: "Sí. Limpiamos, curamos y cambiamos los vendajes, y damos seguimiento hasta que la herida cicatriza.",
      questionEn: "Do you change bandages and follow up?",
      answerEn: "Yes. We clean, dress and change bandages, and follow up until the wound heals.",
    },
    {
      question: "¿Cómo sé si mi herida está infectada?",
      answer: "Si el enrojecimiento crece, hay pus, mal olor, más dolor, calor o fiebre. En ese caso consulta el mismo día.",
      questionEn: "How do I know if my wound is infected?",
      answerEn: "If redness spreads or there is pus, a bad smell, more pain, warmth or fever. In that case get checked the same day.",
    },
    {
      question: "¿Por qué las heridas tardan más en sanar con diabetes?",
      answer: "El azúcar alta y la mala circulación retrasan la cicatrización y aumentan el riesgo de infección, por eso conviene revisar pronto cualquier herida, sobre todo en los pies.",
      questionEn: "Why do wounds heal more slowly with diabetes?",
      answerEn: "High blood sugar and poor circulation delay healing and raise infection risk, so any wound should be checked early, especially on the feet.",
    },
  ],
  "cirugias-menores": [
    {
      question: "¿Qué cirugías menores realizan?",
      answer: "Extracción de lunares, quistes y lipomas pequeños, y otros procedimientos menores de piel con anestesia local según la evaluación.",
      questionEn: "Which minor surgeries do you perform?",
      answerEn: "Removal of moles, cysts and small lipomas, and other minor skin procedures with local anesthesia based on the evaluation.",
    },
    {
      question: "¿Qué señales de un lunar debo vigilar?",
      answer: "Asimetría, bordes irregulares, color disparejo, diámetro mayor de 6 mm o cambios de tamaño, forma o color. Si notas alguna, consulta pronto.",
      questionEn: "Which mole changes should I watch for?",
      answerEn: "Asymmetry, irregular borders, uneven color, a diameter over 6 mm or changes in size, shape or color. If you notice any, get it checked soon.",
    },
    {
      question: "¿Debo avisar si tomo anticoagulantes?",
      answer: "Sí. Los anticoagulantes y la aspirina aumentan el sangrado, así que el equipo médico debe saberlo antes de planear el procedimiento.",
      questionEn: "Should I mention blood thinners?",
      answerEn: "Yes. Blood thinners and aspirin increase bleeding, so the medical team needs to know before planning the procedure.",
    },
  ],
  "drenaje-abscesos": [
    {
      question: "¿El drenaje de un absceso duele?",
      answer: "Se hace con anestesia local, así que solo se siente el piquete inicial. Después del drenaje el dolor suele bajar pronto.",
      questionEn: "Does abscess drainage hurt?",
      answerEn: "It is done with local anesthesia, so you only feel the first pinch. After drainage the pain usually eases soon.",
    },
    {
      question: "¿Puedo reventar el absceso en casa?",
      answer: "No. Exprimirlo puede empujar la infección más adentro. Mientras vienes, usa compresas tibias varias veces al día.",
      questionEn: "Can I pop the abscess at home?",
      answerEn: "No. Squeezing it can push the infection deeper. On the way, use warm compresses several times a day.",
    },
    {
      question: "¿Siempre necesito antibiótico?",
      answer: "No siempre. El tratamiento principal es el drenaje; el antibiótico se indica si hay infección alrededor, fiebre u otros factores de riesgo.",
      questionEn: "Do I always need antibiotics?",
      answerEn: "Not always. The main treatment is drainage; antibiotics are prescribed if there is surrounding infection, fever or other risk factors.",
    },
  ],
  "unas-encarnadas": [
    {
      question: "¿Cómo tratan la uña encarnada?",
      answer: "Con anestesia local se retira la porción de uña que se clava en la piel, se limpia y se venda. El alivio del dolor se nota el mismo día.",
      questionEn: "How do you treat an ingrown nail?",
      answerEn: "With local anesthesia, the portion of nail digging into the skin is removed, cleaned and bandaged. Pain relief is noticeable the same day.",
    },
    {
      question: "¿Cómo evito que se vuelva a encarnar?",
      answer: "Corta las uñas rectas y no muy cortas, usa zapatos amplios y mantén los pies secos. Si se repite, pregunta por opciones para evitar que vuelva a crecer hacia la piel.",
      questionEn: "How can I keep it from happening again?",
      answerEn: "Cut nails straight across and not too short, wear roomy shoes and keep feet dry. If it recurs, ask about options to keep it from growing into the skin.",
    },
    {
      question: "¿Puedo tratarla en casa si tengo diabetes?",
      answer: "No. Con diabetes o mala circulación una herida en el pie se complica fácil; consulta pronto en lugar de cortarla tú.",
      questionEn: "Can I treat it at home if I have diabetes?",
      answerEn: "No. With diabetes or poor circulation a foot wound gets complicated easily; get checked early instead of cutting it yourself.",
    },
  ],
  "farmacia": [
    {
      question: "¿Puedo llevarme mis medicamentos al terminar la consulta?",
      answer: "Sí. Tenemos farmacia dentro de la clínica con los medicamentos que el equipo médico indica con más frecuencia y opciones de venta libre.",
      questionEn: "Can I get my medications right after my visit?",
      answerEn: "Yes. We have a pharmacy inside the clinic with the medications the medical team most often prescribes and over-the-counter options.",
    },
    {
      question: "¿Los genéricos funcionan igual que los de marca?",
      answer: "Los genéricos aprobados por la FDA tienen el mismo ingrediente activo, dosis y forma de uso que el medicamento de marca.",
      questionEn: "Do generics work the same as brand-name drugs?",
      answerEn: "FDA-approved generics have the same active ingredient, dose and use as the brand-name drug.",
    },
    {
      question: "¿Qué hago si un niño se tomó un medicamento?",
      answer: "Llama al Centro de Control de Envenenamientos al 1-800-222-1222, o al 911 si hay dificultad para respirar o pérdida del conocimiento.",
      questionEn: "What do I do if a child swallowed medication?",
      answerEn: "Call Poison Control at 1-800-222-1222, or 911 if there is trouble breathing or loss of consciousness.",
    },
  ],
};

export function getServiceFaqs(slug: string): ServiceFaq[] {
  return SERVICE_FAQS[slug] ?? [];
}
