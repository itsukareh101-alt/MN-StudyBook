export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export const motorcycleQuestions: Question[] = [
  {
    id: 1,
    question: "A Minnesota motorcycle instruction permit remains valid for how long?",
    options: [
      "One year from issuance unless renewed earlier",
      "Six months from issuance unless renewed earlier",
      "Two years from issuance unless renewed earlier",
      "Three years from issuance unless renewed earlier"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: One year from issuance unless renewed earlier."
  },
  {
    id: 2,
    question: "While riding with a Minnesota motorcycle instruction permit, which restriction applies?",
    options: [
      "You may carry one passenger while riding",
      "You may not carry passengers while riding",
      "You may carry two passengers while riding",
      "You may carry passengers after sunset generally"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: You may not carry passengers while riding."
  },
  {
    id: 3,
    question: "Under the Minnesota permit rules, when is motorcycle riding prohibited?",
    options: [
      "From sunset until half hour after sunrise",
      "Only between midnight and six in morning",
      "From half hour after sunset until sunrise",
      "Only during periods without street lighting generally"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: From half hour after sunset until sunrise."
  },
  {
    id: 4,
    question: "A permit rider must use which protective equipment?",
    options: [
      "DOT approved helmet without required eye protection",
      "Eye protection without a DOT approved helmet",
      "Any helmet with ordinary sunglasses only generally",
      "DOT approved helmet and eye protection together"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: DOT approved helmet and eye protection together."
  },
  {
    id: 5,
    question: "Which statement about Minnesota motorcycle headlights is correct?",
    options: [
      "The headlight must remain on whenever riding",
      "The headlight is required only after sunset",
      "The headlight is required only during rain",
      "The headlight is optional on divided highways"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: The headlight must remain on whenever riding."
  },
  {
    id: 6,
    question: "Which eye protection satisfies Minnesota motorcycle requirements?",
    options: [
      "Ordinary sunglasses with a motorcycle windshield generally",
      "Protective glasses goggles or a face shield",
      "Contact lenses combined with a motorcycle windshield",
      "A windshield alone with no additional protection"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Protective glasses goggles or a face shield."
  },
  {
    id: 7,
    question: "A passenger on a motorcycle must be able to:",
    options: [
      "Reach one passenger footrest while seated securely generally",
      "Touch the pavement with both feet while seated",
      "Reach both passenger footrests while seated securely generally",
      "Stand on the rear frame while seated securely"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Reach both passenger footrests while seated securely generally."
  },
  {
    id: 8,
    question: "If a motorcycle has a passenger seat, Minnesota requires:",
    options: [
      "A passenger airbag installed beneath that seat",
      "A passenger seatbelt attached across that seat",
      "A second horn mounted beside that seat",
      "Passenger footrests or floorboards for that seat"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Passenger footrests or floorboards for that seat."
  },
  {
    id: 9,
    question: "Which statement describes Minnesota motorcycle permit passengers?",
    options: [
      "Permit operators may not carry any passengers",
      "Permit operators may carry one qualified passenger",
      "Permit operators may carry passengers before nighttime",
      "Permit operators may carry passengers with helmets"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Permit operators may not carry any passengers."
  },
  {
    id: 10,
    question: "A motorcycle operator on public Minnesota roads must carry:",
    options: [
      "Only vehicle registration without motorcycle authorization generally",
      "A valid license document with motorcycle authorization",
      "Only proof of insurance without motorcycle authorization",
      "Only a motorcycle permit without driver licensing"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: A valid license document with motorcycle authorization."
  },
  {
    id: 11,
    question: "Normally, a motorcycle rider should maintain at least what following interval?",
    options: [
      "One second behind the vehicle ahead normally",
      "Three seconds behind the vehicle ahead normally",
      "Two seconds behind the vehicle ahead normally",
      "Four seconds behind the vehicle ahead normally"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Two seconds behind the vehicle ahead normally."
  },
  {
    id: 12,
    question: "When pavement is slippery or visibility is limited, following distance should:",
    options: [
      "Remain exactly two seconds under every condition",
      "Decrease because slower speeds require less space",
      "Stay unchanged unless another rider follows generally",
      "Increase beyond the normal minimum following interval"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Increase beyond the normal minimum following interval."
  },
  {
    id: 13,
    question: "The manual's three-step SEE strategy stands for:",
    options: [
      "Search evaluate and execute hazards continuously",
      "Scan estimate and escape hazards continuously",
      "Search enter and exit hazards continuously",
      "Signal evaluate and evade hazards continuously"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Search evaluate and execute hazards continuously."
  },
  {
    id: 14,
    question: "In SEE, the Search step emphasizes finding:",
    options: [
      "Only traffic signals and posted speed limits",
      "Potential hazards and available escape paths generally",
      "Only vehicles directly beside the motorcycle generally",
      "Only road defects within one vehicle length"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Potential hazards and available escape paths generally."
  },
  {
    id: 15,
    question: "How far ahead should a rider search for potential hazards?",
    options: [
      "About two seconds ahead along the route",
      "About four seconds ahead along the route",
      "About twelve seconds ahead along the route",
      "About thirty seconds ahead along the route"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: About twelve seconds ahead along the route."
  },
  {
    id: 16,
    question: "What area is considered the urgent path in SEE?",
    options: [
      "Anything within about two seconds of your path",
      "Anything within about eight seconds of your path",
      "Anything within about twelve seconds of your path",
      "Anything within about four seconds of your path"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Anything within about four seconds of your path."
  },
  {
    id: 17,
    question: "When a vehicle is beside you, lane position should help you:",
    options: [
      "Maintain visibility and an escape path around traffic",
      "Remain directly beside its rear quarter continuously generally",
      "Hide inside its blind spot until traffic clears",
      "Match its speed regardless of surrounding hazards generally"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Maintain visibility and an escape path around traffic."
  },
  {
    id: 18,
    question: "If vehicles create hazards on both sides, the manual generally recommends:",
    options: [
      "Using the far left path regardless of conditions",
      "Using the center lane path when appropriate generally",
      "Using the far right path regardless of conditions",
      "Riding directly beside one vehicle continuously when appropriate"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Using the center lane path when appropriate generally."
  },
  {
    id: 19,
    question: "Why should riders avoid another vehicle's blind spot?",
    options: [
      "The motorcycle becomes harder to steer in traffic",
      "The engine receives less cooling air nearby generally",
      "The driver may not detect the motorcycle nearby",
      "The motorcycle legally loses its lane position generally"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: The driver may not detect the motorcycle nearby."
  },
  {
    id: 20,
    question: "A larger following cushion is especially useful when:",
    options: [
      "Traffic is light and pavement remains completely dry",
      "The rider has recently cleaned the windshield generally",
      "The motorcycle is parked beside the roadway generally",
      "Road conditions reduce traction or visibility ahead generally"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Road conditions reduce traction or visibility ahead generally."
  },
  {
    id: 21,
    question: "For a normal quick stop, the rider should:",
    options: [
      "Apply both brakes together with progressive pressure generally",
      "Apply only the rear brake with progressive pressure",
      "Apply only the front brake with progressive pressure",
      "Release both brakes whenever the motorcycle slows generally"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Apply both brakes together with progressive pressure generally."
  },
  {
    id: 22,
    question: "The front brake can provide approximately what share of stopping power?",
    options: [
      "Thirty percent or less during effective braking",
      "Seventy percent or more during effective braking",
      "Exactly fifty percent during every effective stop",
      "Ten percent or less during effective braking"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Seventy percent or more during effective braking."
  },
  {
    id: 23,
    question: "If the front wheel locks during emergency braking, the manual says:",
    options: [
      "Hold the front brake locked until completely stopped",
      "Release both brakes and accelerate away immediately generally",
      "Release the front brake immediately then reapply firmly",
      "Apply only the front brake harder until stopped"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Release the front brake immediately then reapply firmly."
  },
  {
    id: 24,
    question: "If the rear wheel locks on a straight good-traction surface, a rider may:",
    options: [
      "Release it instantly while turning sharply left generally",
      "Turn the handlebars sharply toward the skid generally",
      "Accelerate hard while remaining heavily leaned when appropriate",
      "Keep it locked while maintaining a straight path"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Keep it locked while maintaining a straight path."
  },
  {
    id: 25,
    question: "When braking in a curve, available traction is reduced because:",
    options: [
      "Some tire traction is already used for cornering",
      "The engine automatically reduces available braking force generally",
      "The front tire becomes completely weightless in corners",
      "The rear brake stops functioning whenever leaned generally"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Some tire traction is already used for cornering."
  },
  {
    id: 26,
    question: "If possible, to stop quickly in a curve, first:",
    options: [
      "Lean farther into the curve before braking firmly",
      "Straighten the motorcycle and square the handlebars generally",
      "Turn the handlebars opposite the curve before braking",
      "Release the brakes until the motorcycle exits generally"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Straighten the motorcycle and square the handlebars generally."
  },
  {
    id: 27,
    question: "ABS is designed primarily to:",
    options: [
      "Shorten every stopping distance regardless of pavement generally",
      "Replace the need for proper braking technique generally",
      "Prevent wheel lockup and help avoid stopping skids",
      "Prevent every possible loss of traction while cornering"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Prevent wheel lockup and help avoid stopping skids."
  },
  {
    id: 28,
    question: "During a turn, the safest speed adjustment generally occurs:",
    options: [
      "After reaching the center of the turn",
      "Only after completing the turn exit generally",
      "Only after the tires begin to slide",
      "Before entering the turn or curve generally"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Before entering the turn or curve generally."
  },
  {
    id: 29,
    question: "The manual's basic cornering sequence begins with:",
    options: [
      "Slow before turning and reduce speed appropriately",
      "Accelerate before turning and increase lean sharply",
      "Brake hardest while turning and release afterward",
      "Shift repeatedly while turning and maintain speed"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Slow before turning and reduce speed appropriately."
  },
  {
    id: 30,
    question: "When turning, the rider should generally:",
    options: [
      "Focus directly on the pavement beside the tire",
      "Look through the turn toward the intended path",
      "Watch the outside edge of the motorcycle generally",
      "Look down at the instrument panel continuously generally"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Look through the turn toward the intended path."
  },
  {
    id: 31,
    question: "For effective countersteering, a rider turning left should:",
    options: [
      "Press the right handgrip forward briefly to initiate",
      "Pull both handgrips backward equally to initiate generally",
      "Press the left handgrip forward briefly to initiate",
      "Release both handgrips and shift body weight only"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Press the left handgrip forward briefly to initiate."
  },
  {
    id: 32,
    question: "A rider approaching a curve should choose a path that:",
    options: [
      "Always places the motorcycle nearest the centerline generally",
      "Always places the motorcycle nearest the outside edge",
      "Keeps the motorcycle fixed in one lane position",
      "Improves visibility while preserving an escape route generally"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Improves visibility while preserving an escape route generally."
  },
  {
    id: 33,
    question: "Why should a rider keep the knees against the tank during braking?",
    options: [
      "It helps stabilize the rider during straight-line braking",
      "It increases rear tire traction during emergency braking",
      "It allows the motorcycle to turn without steering",
      "It prevents the front brake from transferring weight"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: It helps stabilize the rider during straight-line braking."
  },
  {
    id: 34,
    question: "When shifting down, a smoother sequence includes:",
    options: [
      "Grab throttle squeeze brake shift then release generally",
      "Roll off throttle squeeze clutch shift then ease",
      "Close throttle release clutch shift then accelerate generally",
      "Brake sharply shift twice release clutch abruptly generally"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Roll off throttle squeeze clutch shift then ease."
  },
  {
    id: 35,
    question: "Engine braking occurs when a rider:",
    options: [
      "Applies only the front brake to reduce speed",
      "Uses the rear brake while holding throttle open",
      "Downshifts and uses engine resistance to reduce speed",
      "Turns off the engine while coasting downhill generally"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Downshifts and uses engine resistance to reduce speed."
  },
  {
    id: 36,
    question: "Why is changing gears before a turn generally preferred?",
    options: [
      "It increases lean angle before entering the curve",
      "It keeps the clutch fully engaged during braking",
      "It eliminates the need to control motorcycle speed",
      "It reduces sudden power changes while cornering generally"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: It reduces sudden power changes while cornering generally."
  },
  {
    id: 37,
    question: "If shifting becomes necessary while cornering, the manual recommends:",
    options: [
      "Make the gear change smoothly to avoid skidding",
      "Change several gears rapidly while leaning deeply generally",
      "Release the clutch abruptly to stabilize the rear",
      "Brake sharply while shifting through the corner generally"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Make the gear change smoothly to avoid skidding."
  },
  {
    id: 38,
    question: "At a stop, the manual recommends remaining in:",
    options: [
      "Neutral gear so you can move away quickly",
      "First gear so you can move away quickly",
      "Second gear so you can move away quickly",
      "Top gear so you can move away quickly"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: First gear so you can move away quickly."
  },
  {
    id: 39,
    question: "A sudden change in rear-wheel power during a turn can:",
    options: [
      "Increase traction and reduce the motorcycle lean",
      "Prevent the motorcycle from entering the turn",
      "Cause a skid and reduce motorcycle control",
      "Guarantee the motorcycle remains upright throughout generally"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Cause a skid and reduce motorcycle control."
  },
  {
    id: 40,
    question: "When braking normally, using both brakes helps riders:",
    options: [
      "Reduce the need to inspect brake controls generally",
      "Keep the rear tire unloaded during every stop",
      "Avoid transferring any weight toward the front generally",
      "Develop proper braking skills for emergencies when appropriate"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Develop proper braking skills for emergencies when appropriate."
  },
  {
    id: 41,
    question: "At a wet painted lane marking, the rider should:",
    options: [
      "Keep the motorcycle upright and avoid hard inputs",
      "Accelerate sharply across the marking without leaning generally",
      "Brake hard while crossing the marking directly generally",
      "Turn sharply while crossing the marking quickly generally"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Keep the motorcycle upright and avoid hard inputs."
  },
  {
    id: 42,
    question: "When rain first begins, the lane center can become hazardous because:",
    options: [
      "Fresh pavement becomes rougher and increases tire grip",
      "Oil and grease become especially slippery when wet",
      "Water immediately removes every contaminant from pavement generally",
      "Road paint becomes completely dry under rainfall generally"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Oil and grease become especially slippery when wet."
  },
  {
    id: 43,
    question: "When riding on slippery pavement, the manual emphasizes:",
    options: [
      "Use abrupt braking to shorten the stopping distance",
      "Increase lean angle to maintain a tighter path",
      "Avoid sudden changes in speed or direction generally",
      "Accelerate sharply whenever the tire begins slipping generally"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Avoid sudden changes in speed or direction generally."
  },
  {
    id: 44,
    question: "On ice or snow, if travel is unavoidable, the rider should:",
    options: [
      "Lean deeply and maintain normal road speed",
      "Brake repeatedly while making frequent steering inputs",
      "Accelerate firmly to cross the surface quickly",
      "Keep the motorcycle upright and proceed slowly"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Keep the motorcycle upright and proceed slowly."
  },
  {
    id: 45,
    question: "Rain grooves or bridge gratings may cause the motorcycle to:",
    options: [
      "Weave slightly while remaining generally controllable when appropriate",
      "Lose all steering control whenever speed increases generally",
      "Lock both wheels whenever the surface is wet",
      "Tip immediately unless crossed at ninety degrees generally"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Weave slightly while remaining generally controllable when appropriate."
  },
  {
    id: 46,
    question: "When crossing rain grooves or bridge gratings, the manual recommends:",
    options: [
      "Brake firmly maintain high speed and weave",
      "Relax maintain steady speed and ride straight",
      "Accelerate sharply lean deeply and weave generally",
      "Stop completely place feet down and push"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Relax maintain steady speed and ride straight."
  },
  {
    id: 47,
    question: "For tracks or seams running parallel to your path, cross:",
    options: [
      "At an angle of exactly fifteen degrees generally",
      "At an angle of exactly thirty degrees generally",
      "At an angle of at least forty-five degrees",
      "At an angle of exactly ninety degrees generally"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: At an angle of at least forty-five degrees."
  },
  {
    id: 48,
    question: "Why can crossing parallel tracks at ninety degrees be undesirable?",
    options: [
      "The tires always lose traction on every rail",
      "The motorcycle cannot steer after crossing metal generally",
      "The front wheel will always lock during crossing",
      "The direction can carry you into another lane"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: The direction can carry you into another lane."
  },
  {
    id: 49,
    question: "Dirt and gravel are especially likely to collect:",
    options: [
      "Along road edges curves and highway ramps generally",
      "Only in the center of every travel lane",
      "Only beside traffic signals in urban areas generally",
      "Only on straight roads during dry weather generally"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Along road edges curves and highway ramps generally."
  },
  {
    id: 50,
    question: "When a slippery surface is unavoidable, the rider should:",
    options: [
      "Increase speed and choose the roughest surface generally",
      "Reduce speed and use the least slippery path",
      "Brake abruptly and steer toward the slickest path",
      "Lean harder and accelerate across the surface generally"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Reduce speed and use the least slippery path."
  },
  {
    id: 51,
    question: "If the front tire fails, steering will generally feel:",
    options: [
      "Light and unusually easy to control precisely",
      "Loose but completely unaffected by the failure",
      "Heavy and more difficult to control precisely",
      "Normal until the rear tire also fails"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Heavy and more difficult to control precisely."
  },
  {
    id: 52,
    question: "If the rear tire fails, the motorcycle may:",
    options: [
      "Become completely weightless at the rear when appropriate",
      "Immediately lock the front wheel without braking generally",
      "Turn sharply toward the nearest road shoulder generally",
      "Jerk or sway from side to side noticeably"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Jerk or sway from side to side noticeably."
  },
  {
    id: 53,
    question: "When a tire fails while riding, the rider should:",
    options: [
      "Hold the handlebar firmly and gradually slow generally",
      "Grab the front brake and steer sharply away",
      "Accelerate hard until the tire regains pressure generally",
      "Release the handlebars and coast toward traffic generally"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Hold the handlebar firmly and gradually slow generally."
  },
  {
    id: 54,
    question: "If a throttle becomes stuck open, the rider should first:",
    options: [
      "Apply only the rear brake while accelerating generally",
      "Turn off the engine using the cutoff switch",
      "Pull the front brake harder while accelerating generally",
      "Shift repeatedly while keeping the throttle open generally"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Turn off the engine using the cutoff switch."
  },
  {
    id: 55,
    question: "If a motorcycle develops a wobble, the rider should:",
    options: [
      "Accelerate hard until the wobble disappears completely generally",
      "Brake sharply while turning against the wobble generally",
      "Grip the handlebars firmly and close throttle gradually",
      "Release the handlebars and allow the motorcycle freedom"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Grip the handlebars firmly and close throttle gradually."
  },
  {
    id: 56,
    question: "If an object strikes and damages face protection, the rider should:",
    options: [
      "Remove the face protection immediately while moving when appropriate",
      "Look down at the damaged shield while riding generally",
      "Continue normally while wiping the shield continuously when appropriate",
      "Keep eyes on road and pull off when safe"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Keep eyes on road and pull off when safe."
  },
  {
    id: 57,
    question: "Before pulling off the roadway, a rider should:",
    options: [
      "Check surface firmness mirrors and blind spots",
      "Turn immediately toward the shoulder without signaling",
      "Brake sharply and cross any surface quickly",
      "Stop beside traffic before checking the shoulder"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Check surface firmness mirrors and blind spots."
  },
  {
    id: 58,
    question: "On a soft roadside surface, the rider should:",
    options: [
      "Maintain highway speed until both tires reach it",
      "Slow substantially before leaving the roadway when appropriate",
      "Brake sharply after entering the soft surface generally",
      "Accelerate while turning sharply onto the shoulder generally"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Slow substantially before leaving the roadway when appropriate."
  },
  {
    id: 59,
    question: "When parking beside a curb, the manual generally recommends:",
    options: [
      "Park completely parallel with front wheel toward curb",
      "Angle the motorcycle with front wheel toward curb",
      "Angle the motorcycle with rear wheel toward curb",
      "Park diagonally with both wheels away from curb"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Angle the motorcycle with rear wheel toward curb."
  },
  {
    id: 60,
    question: "Why should a rider pull well off the roadway when stopping?",
    options: [
      "A motorcycle becomes unstable whenever it is near traffic generally",
      "Minnesota requires motorcycles to park on grass under these conditions",
      "The motorcycle cannot restart beside a travel lane when appropriate",
      "A parked motorcycle can be difficult for traffic to see"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: A parked motorcycle can be difficult for traffic to see."
  },
  {
    id: 61,
    question: "A passenger should mount the motorcycle only after:",
    options: [
      "The engine is running and transmission is neutral generally",
      "The engine is off and transmission is first gear",
      "The engine is running and transmission is top gear",
      "The engine is off and transmission is neutral generally"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: The engine is running and transmission is neutral generally."
  },
  {
    id: 62,
    question: "While a passenger mounts, the operator should:",
    options: [
      "Keep both feet on pegs and throttle open",
      "Keep both feet down and front brake applied",
      "Release brakes and lean motorcycle toward passenger generally",
      "Hold clutch released and steer toward the passenger"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Keep both feet down and front brake applied."
  },
  {
    id: 63,
    question: "A passenger should hold onto:",
    options: [
      "The rider's handlebars throttle or brake controls firmly",
      "The passenger footrests exhaust or chain firmly generally",
      "The rider's waist hips belt or handholds firmly",
      "The rider's mirrors windshield or front brake firmly"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: The rider's waist hips belt or handholds firmly."
  },
  {
    id: 64,
    question: "During turns, a passenger should generally:",
    options: [
      "Lean opposite the rider to counterbalance the turn",
      "Remain upright while the rider leans independently generally",
      "Shift toward the outside edge before each turn",
      "Stay directly behind and lean with the rider"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Stay directly behind and lean with the rider."
  },
  {
    id: 65,
    question: "Why should a passenger keep both feet on footrests?",
    options: [
      "Firm footing helps prevent falls and instability",
      "Firm footing allows faster acceleration during starts",
      "Firm footing increases front brake pressure automatically",
      "Firm footing prevents the rider from steering"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Firm footing helps prevent falls and instability."
  },
  {
    id: 66,
    question: "With a passenger aboard, the motorcycle generally:",
    options: [
      "Needs less time to accelerate slow and turn",
      "Needs more time to accelerate slow and turn",
      "Requires identical stopping distances under all loads generally",
      "Responds identically regardless of passenger weight when appropriate"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Needs more time to accelerate slow and turn."
  },
  {
    id: 67,
    question: "When carrying a passenger, the rider should generally:",
    options: [
      "Follow more closely to compensate for added weight generally",
      "Brake later because passengers increase tire grip when appropriate",
      "Slow earlier and maintain a larger space cushion generally",
      "Use smaller traffic gaps to keep the trip efficient"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Slow earlier and maintain a larger space cushion generally."
  },
  {
    id: 68,
    question: "When carrying cargo, heavy items should generally be:",
    options: [
      "Loaded high and secured near the rear edge",
      "Loaded only inside one saddlebag for balance generally",
      "Loaded loosely so suspension can absorb movement generally",
      "Loaded low and secured close to centerline generally"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Loaded low and secured close to centerline generally."
  },
  {
    id: 69,
    question: "Uneven saddlebag loading can cause the motorcycle to:",
    options: [
      "Pull toward one side and become less stable",
      "Accelerate more quickly because weight shifts rearward generally",
      "Stop more quickly because weight shifts outward generally",
      "Turn more sharply because one side becomes lighter"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Pull toward one side and become less stable."
  },
  {
    id: 70,
    question: "A loose cargo load can become dangerous because it may:",
    options: [
      "Improve traction by increasing rear suspension travel",
      "Shift or contact the wheel or chain",
      "Reduce stopping distance by lowering tire pressure",
      "Stabilize the motorcycle during sudden lane changes"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Shift or contact the wheel or chain."
  },
  {
    id: 71,
    question: "In group riding, staggered formation is useful because it:",
    options: [
      "Places every rider directly beside another rider",
      "Eliminates the need for individual escape routes",
      "Keeps riders close while preserving space cushions",
      "Requires every rider to match identical speeds"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Keeps riders close while preserving space cushions."
  },
  {
    id: 72,
    question: "A group should generally switch to single file when:",
    options: [
      "Traveling straight on an open freeway generally",
      "Following traffic on a wide straight roadway",
      "Cruising slowly through a long clear section",
      "Entering curves turning or highway ramps generally"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Entering curves turning or highway ramps generally."
  },
  {
    id: 73,
    question: "When entering a freeway as a group, riders should:",
    options: [
      "Enter single file then form up after merging generally",
      "Enter side by side then merge as a group",
      "Enter staggered and immediately occupy every lane when appropriate",
      "Enter tightly together and maintain minimal spacing when appropriate"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Enter single file then form up after merging generally."
  },
  {
    id: 74,
    question: "When exiting a freeway as a group, riders should:",
    options: [
      "Remain side by side until reaching the ramp generally",
      "Use single file for additional space and reaction time",
      "Compress spacing before the exit to stay together generally",
      "Pass other traffic while changing lanes together when appropriate"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Use single file for additional space and reaction time."
  },
  {
    id: 75,
    question: "On a two-lane highway, group riders passing slower traffic should:",
    options: [
      "Pass side by side whenever the leader signals generally",
      "Pass as a compact group using one opening generally",
      "Pass one at a time after the leader passes",
      "Pass immediately whenever another rider has passed when appropriate"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Pass one at a time after the leader passes."
  },
  {
    id: 76,
    question: "At a group intersection where not everyone clears the light, riders should:",
    options: [
      "Speed up so every rider clears immediately generally",
      "Run the signal so the group remains together",
      "Stop inside the intersection beside turning traffic generally",
      "Stop at a safe point ahead and wait"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Stop at a safe point ahead and wait."
  },
  {
    id: 77,
    question: "Why are intersections especially risky for motorcycle groups?",
    options: [
      "Traffic conflicts can separate riders and create hazards",
      "Motorcycles lose traction automatically at intersections when appropriate",
      "Group formations are prohibited at every intersection generally",
      "Motorcycles cannot legally proceed through green signals generally"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Traffic conflicts can separate riders and create hazards."
  },
  {
    id: 78,
    question: "During a group ride, the leader should:",
    options: [
      "Set a pace based only on the fastest rider",
      "Set a pace appropriate for the least experienced rider",
      "Increase speed whenever the group becomes separated when appropriate",
      "Choose routes without considering traffic conditions under these conditions"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Set a pace appropriate for the least experienced rider."
  },
  {
    id: 79,
    question: "When riding in heavy group traffic, riders should:",
    options: [
      "Ride extremely close so cars cannot enter gaps generally",
      "Use side by side spacing to block merging traffic",
      "Avoid compressing spacing below their safety cushion when appropriate",
      "Follow the leader closely regardless of roadway hazards generally"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Avoid compressing spacing below their safety cushion when appropriate."
  },
  {
    id: 80,
    question: "When passing as a group on a freeway, riders may:",
    options: [
      "Always pass side by side regardless of traffic generally",
      "Pass without checking because the leader already passed generally",
      "Pass only when every rider can accelerate equally generally",
      "Pass as a unit when conditions make it safe"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Pass as a unit when conditions make it safe."
  },
  {
    id: 81,
    question: "Alcohol can impair motorcycle riding skills:",
    options: [
      "Before a rider reaches the legal BAC limit generally",
      "Only after a rider reaches the legal BAC limit",
      "Only when a rider feels physically tired when appropriate",
      "Only after a rider consumes several drinks when appropriate"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Before a rider reaches the legal BAC limit generally."
  },
  {
    id: 82,
    question: "According to the manual, a BAC of 0.08 percent is:",
    options: [
      "The point where all riders lose consciousness generally",
      "The adult intoxication threshold used in most states",
      "The minimum level required before impairment begins generally",
      "The level at which motorcycle skills become unaffected"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: The adult intoxication threshold used in most states."
  },
  {
    id: 83,
    question: "Why is legal BAC status not the only concern?",
    options: [
      "Riders remain unaffected until legal limits are reached",
      "Physical strength increases below legal limits when appropriate",
      "Judgment and skills can decline below legal limits",
      "Motorcycles compensate for impairment below legal limits generally"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Judgment and skills can decline below legal limits."
  },
  {
    id: 84,
    question: "Which factor can increase the danger of alcohol impairment?",
    options: [
      "Motorcycles automatically correct every impaired steering input generally",
      "Protective clothing prevents alcohol from affecting judgment generally",
      "Lower speeds eliminate the need for hazard awareness",
      "Motorcycle riding requires rapid balance and decisions generally"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Motorcycle riding requires rapid balance and decisions generally."
  },
  {
    id: 85,
    question: "If a rider has been drinking, the safest choice is to:",
    options: [
      "Avoid riding and arrange another way home generally",
      "Ride slowly while using extra caution around traffic",
      "Wait briefly then ride once balance feels normal",
      "Drink coffee and ride once feeling more alert"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Avoid riding and arrange another way home generally."
  },
  {
    id: 86,
    question: "Fatigue is dangerous for riders because it can:",
    options: [
      "Improve concentration by reducing environmental distractions generally",
      "Reduce alertness judgment and response quality generally",
      "Increase reaction speed through heightened nervousness generally",
      "Make hazard detection easier by narrowing attention"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Reduce alertness judgment and response quality generally."
  },
  {
    id: 87,
    question: "A rider showing signs of fatigue should:",
    options: [
      "Increase speed to reach the destination sooner generally",
      "Use loud music to maintain riding concentration generally",
      "Take a break rather than continue riding tired",
      "Reduce following distance to maintain visual focus generally"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Take a break rather than continue riding tired."
  },
  {
    id: 88,
    question: "Why can wind and cold contribute to riding fatigue?",
    options: [
      "They improve circulation and increase mental focus generally",
      "They reduce vibration and make riding effortless generally",
      "They eliminate the need for frequent rest stops",
      "They increase physical strain and reduce alertness generally"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: They increase physical strain and reduce alertness generally."
  },
  {
    id: 89,
    question: "If medication may affect riding ability, a rider should:",
    options: [
      "Check its effects and avoid riding if impaired",
      "Assume prescription medicine cannot affect motorcycle control generally",
      "Take an extra dose to prevent riding fatigue",
      "Combine it with alcohol to balance side effects"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Check its effects and avoid riding if impaired."
  },
  {
    id: 90,
    question: "What is the manual's central message about impairment?",
    options: [
      "Ride only after impairment symptoms become noticeable when appropriate",
      "Do not mix motorcycle riding with alcohol or drugs",
      "Use protective gear to offset alcohol or drugs generally",
      "Rely on experience to overcome alcohol or drugs generally"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Do not mix motorcycle riding with alcohol or drugs."
  },
  {
    id: 91,
    question: "Which item is part of the T-CLOCS pre-ride inspection?",
    options: [
      "Tires and wheels checked only after long rides",
      "Tires and wheels checked only during wet weather",
      "Tires and wheels checked for pressure and condition",
      "Tires and wheels checked only before annual service"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Tires and wheels checked for pressure and condition."
  },
  {
    id: 92,
    question: "In T-CLOCS, the letter C refers to:",
    options: [
      "Cooling including radiator hoses and fan operation",
      "Chains including lubrication tension and sprocket wear",
      "Cargo including straps racks and saddlebag loading",
      "Controls including levers cables and throttle operation"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Controls including levers cables and throttle operation."
  },
  {
    id: 93,
    question: "In T-CLOCS, the letter L refers to:",
    options: [
      "Lights and electrical equipment checked before riding",
      "Lubrication and engine oil checked before riding",
      "Levers and cables checked before riding generally",
      "Loads and luggage checked before riding generally"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Lights and electrical equipment checked before riding."
  },
  {
    id: 94,
    question: "In T-CLOCS, the letter O refers to:",
    options: [
      "Operation and handling checked before riding generally",
      "Oil and other fluids checked before riding",
      "Outriggers and stands checked before riding generally",
      "Odometer and gauges checked before riding generally"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Oil and other fluids checked before riding."
  },
  {
    id: 95,
    question: "In T-CLOCS, the letter S refers to:",
    options: [
      "Steering checked only while riding at speed",
      "Suspension checked only after carrying passengers generally",
      "Stands checked for proper operation and condition",
      "Signals checked only during nighttime riding generally"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Stands checked for proper operation and condition."
  },
  {
    id: 96,
    question: "Before every ride, a pre-ride inspection should be:",
    options: [
      "Performed only when the motorcycle feels unusual generally",
      "Performed only after completing the first trip generally",
      "Performed only when maintenance is already overdue generally",
      "Routine enough to identify problems before entering traffic"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Routine enough to identify problems before entering traffic."
  },
  {
    id: 97,
    question: "A motorcycle's center of gravity rises when cargo is:",
    options: [
      "Attached high which can upset the motorcycle balance",
      "Attached low which can improve the motorcycle balance",
      "Placed evenly which can preserve the motorcycle balance",
      "Secured centrally which can preserve the motorcycle balance"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Attached high which can upset the motorcycle balance."
  },
  {
    id: 98,
    question: "When using saddlebags, the manual recommends:",
    options: [
      "Placing most weight inside only one bag",
      "Distributing approximately equal weight between both bags",
      "Leaving heavier items unsecured inside both bags",
      "Filling one bag completely before using another"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Distributing approximately equal weight between both bags."
  },
  {
    id: 99,
    question: "Before riding a fully loaded motorcycle, the manual recommends:",
    options: [
      "Taking it directly onto crowded highways for testing",
      "Testing it only after reaching the destination area",
      "Testing it on familiar roads before extended travel",
      "Skipping testing when the load is securely fastened"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Testing it on familiar roads before extended travel."
  },
  {
    id: 100,
    question: "A fully loaded motorcycle may require more:",
    options: [
      "Engine power and cornering grip than usual",
      "Fuel pressure and tire diameter than usual",
      "Electrical power and steering angle than usual",
      "Acceleration distance and stopping distance than usual"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Motorcycle and Motorized Bicycle Manual supports this choice: Acceleration distance and stopping distance than usual."
  }
];
