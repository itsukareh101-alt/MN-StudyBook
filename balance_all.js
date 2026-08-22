import fs from 'fs';

// Helper to load questions
function loadQuestions(file, varName) {
  const content = fs.readFileSync(file, 'utf8');
  const match = content.match(new RegExp(`export const ${varName}: Question\\[\\] = ([\\s\\S]*?);\\s*$`));
  if (!match) throw new Error('Could not parse ' + file);
  return eval(match[1]);
}

function saveQuestions(file, varName, list) {
  const code = `export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export const ${varName}: Question[] = ${JSON.stringify(list, null, 2)};
`;
  fs.writeFileSync(file, code, 'utf8');
}

// 1. BALANCE MOTORCYCLE QUESTIONS
const moto = loadQuestions('./src/data/questions.ts', 'motorcycleQuestions');

const motoUpdates = {
  14: [
    "Turn off the kill switch before using the key",
    "Turn off the key ignition before kill switch",
    "Shift into neutral and release clutch fully",
    "Pull both front and rear brakes simultaneously"
  ],
  19: [
    "Always in single-file formation through the entire turn",
    "In a tight side-by-side pair to block vehicle passing",
    "With the group leader weaving across the lane path",
    "With tail riders accelerating ahead to scout conditions"
  ],
  29: [
    "Steer firmly to the right to counteract the shift",
    "Swerve rapidly to the left to catch your balance",
    "Ease off throttle and brake hard with front brake",
    "Lean your motorcycle down into the wind gusts"
  ],
  31: [
    "Hold both hand grips firmly and do not fight wobble",
    "Slam on the front brake lever to stop immediately",
    "Shift into reverse gear to lock the drive chain",
    "Accelerate aggressively to pull out of the wobble"
  ],
  41: [
    "Wear high-visibility retro-reflective riding gear",
    "Flash your high-beam headlight continuously in city",
    "Sound your motorcycle horn at every street corner",
    "Ride exclusively in the far right curb tire track"
  ],
  45: [
    "Low and as close to center of motorcycle as possible",
    "High up mounted on an extended rear sissy bar rack",
    "Strapped directly across the front fork shock tubes",
    "Packed entirely inside one left-side saddlebag only"
  ],
  46: [
    "Keep feet on footrests at all times when in motion",
    "Put feet down on the roadway pavement at all turns",
    "Hold onto the operator's jacket lapels or shoulders",
    "Lean in the opposite direction from the motorcycle"
  ],
  48: [
    "The front wheel brake provides most stopping power",
    "The rear wheel brake provides most stopping power",
    "Both brakes always provide equal stopping power",
    "Engine compression braking provides most stopping"
  ],
  49: [
    "Use both the front and rear brakes simultaneously",
    "Use only the rear brake pedal to avoid endo flips",
    "Use only the front brake lever to maximize control",
    "Shift into neutral and coast to a gentle stop"
  ],
  52: [
    "Release the rear brake pedal completely immediately",
    "Keep rear brake applied until motorcycle has stopped",
    "Pump the front brake lever rapidly up and down",
    "Accelerate hard to break the rear wheel traction"
  ],
  55: [
    "Look well ahead to where you want the bike to go",
    "Stare directly at the front tire contact patch",
    "Keep eyes focused exclusively on the speedometer",
    "Look straight down at the painted road lane lines"
  ],
  57: [
    "Rise slightly off seat and cross at ninety degrees",
    "Stay seated and cross at a sharp thirty-degree angle",
    "Accelerate to top speed before hitting the rails",
    "Drag both feet along the pavement for extra support"
  ],
  86: [
    "Straighten up the motorcycle before applying brakes",
    "Apply maximum front brake pressure while leaning deep",
    "Drop feet to the pavement to stabilize the lean angle",
    "Shift down two gears and release clutch abruptly"
  ],
  87: [
    "Release rear brake instantly to let the wheel spin free",
    "Keep rear brake locked until you have stopped completely",
    "Turn handlebars sharply in the opposite skid direction",
    "Downshift rapidly and apply hard front brake pressure"
  ],
  88: [
    "Ride in the left or right tire track where cars clear path",
    "Ride directly down the oily center of the travel lane",
    "Ride on the paved outer road shoulder next to the ditch",
    "Weave constantly across the lane to dry your tire treads"
  ],
  89: [
    "Lean the motorcycle and keep your upper torso upright",
    "Lean your upper torso while keeping motorcycle upright",
    "Keep both motorcycle and body locked completely stiff",
    "Drag your inside foot along the asphalt for balance"
  ],
  90: [
    "Shift down through gears smoothly as the bike slows down",
    "Shift directly into neutral and coast with clutch pulled",
    "Apply only the rear brake pedal until coming to a stop",
    "Keep transmission in top cruising gear until fully halted"
  ],
  98: [
    "Both front and rear brakes should be applied together",
    "Only the front hand brake lever should ever be used",
    "Only the rear foot brake pedal should ever be used",
    "Engine compression should be the only braking force"
  ]
};

moto.forEach(q => {
  if (motoUpdates[q.id]) {
    q.options = motoUpdates[q.id];
  }
});

saveQuestions('./src/data/questions.ts', 'motorcycleQuestions', moto);
console.log('Motorcycle questions balanced.');

// 2. BALANCE DRIVER QUESTIONS
const drv = loadQuestions('./src/data/driverQuestions.ts', 'driverQuestions');

const drvUpdates = {
  1011: [
    "Yellow diamond-shaped road sign",
    "Orange diamond-shaped work sign",
    "Blue rectangular service sign",
    "Green rectangular guide sign"
  ],
  1021: [
    "Within twelve inches (one foot) of the curb",
    "Within twenty-four inches (two feet) of curb",
    "Within eighteen inches of the nearest curb",
    "Within six inches of the street gutter curb"
  ],
  1023: [
    "At least ten feet away from the fire hydrant",
    "At least fifteen feet away from fire hydrant",
    "At least twenty feet away from fire hydrant",
    "At least five feet away from the fire hydrant"
  ],
  1025: [
    "At least fifty feet from nearest rail track",
    "At least twenty-five feet from rail track",
    "At least one hundred feet from rail track",
    "At least thirty feet from nearest rail track"
  ],
  1026: [
    "A white rectangular regulatory sign",
    "A yellow diamond warning road sign",
    "An orange diamond construction sign",
    "A blue rectangular road guide sign"
  ],
  1029: [
    "A serious felony criminal offense",
    "A simple petty misdemeanor warning",
    "An administrative license citation",
    "A standard municipal civil penalty"
  ],
  1038: [
    "Fines, license suspension, registration revocation, and jail",
    "A minor administrative warning without any financial impact",
    "A small ten-dollar surcharge on standard license plate tabs",
    "An automatic cancellation of private vehicle warranties"
  ],
  1039: [
    "Stop vehicle, provide help, call 911, and exchange information",
    "Drive directly home and call your local auto insurance agent",
    "Move vehicle off road and wait until morning to file reports",
    "Leave a short handwritten note on the nearest utility pole"
  ],
  1041: [
    "Scan, Identify, Predict, Decide, and Execute",
    "Steer, Inspect, Park, Drive, and Exit safely",
    "Speed, Intersect, Position, Distance, and Stop",
    "Signals, Intersections, Pedestrians, and Signs"
  ],
  1043: [
    "Four feet clearance from the bicycle",
    "Three feet clearance from the bicycle",
    "Two feet clearance from the bicycle",
    "Five feet clearance from the bicycle"
  ],
  1044: [
    "Avoid eye contact, remain calm, and drive to a safe public area",
    "Brake-check aggressively to force the trailing driver back",
    "Make hand gestures to demonstrate that you are not afraid",
    "Pull over onto the road shoulder and step out of your car"
  ],
  1052: [
    "Check tire pressure and maintain steady low travel speed",
    "Speed up to forty miles per hour to cut through puddles",
    "Slam on brakes immediately if you feel tires hydroplane",
    "Drive on the shoulder gravel to maximize road tire grip"
  ],
  1054: [
    "Bridges and overpasses freeze first in cold winter weather",
    "Underpasses and tunnels freeze first during winter storms",
    "Multi-lane interstate highways freeze before rural routes",
    "Gravel township roads freeze before paved state highways"
  ],
  1056: [
    "Ease off gas, steer in direction of skid, and avoid slamming brakes",
    "Slam hard on brakes, shift to neutral, and honk horn continuously",
    "Accelerate firmly to force drive wheels to bite through roadway ice",
    "Shift transmission to reverse gear and steer toward road ditch"
  ],
  1057: [
    "Leave a note with your contact information and report the collision",
    "Wait five minutes and leave the scene if no property owner arrives",
    "Take a quick photo of the vehicle license plate and drive away",
    "Do nothing unless the visible property damage exceeds five hundred"
  ],
  1058: [
    "Running vehicle engine in closed spaces or having exhaust leaks",
    "Driving with low engine oil levels or low tire inflation pressure",
    "Running low on windshield washer fluid during heavy snowstorms",
    "Driving at high mountain altitudes with cabin heater fan on max"
  ],
  1065: [
    "Turn wheels toward curb or road edge",
    "Turn wheels away from nearest curb",
    "Keep front wheels straight forward",
    "Turn wheels toward center of street"
  ],
  1069: [
    "Turn wheels sharply toward road side",
    "Turn wheels away from the street edge",
    "Keep front wheels straight forward",
    "Turn wheels toward traffic center lane"
  ],
  1070: [
    "Grip steering wheel firmly, ease off gas, and brake gently to stop",
    "Slam hard on brakes immediately and steer rapidly toward shoulder",
    "Accelerate vehicle to maximum speed to stabilize the blown tire",
    "Downshift immediately to first gear to lock all vehicle wheels"
  ],
  1071: [
    "Look over your shoulder through the rear side window in blind spot",
    "Rely exclusively on wide-angle rearview and side convex mirrors",
    "Honk vehicle horn twice and accelerate quickly into the lane",
    "Turn on high-beam headlights to illuminate adjacent travel lanes"
  ],
  1074: [
    "Stop completely before the crosswalk",
    "Slow down and roll past crosswalk",
    "Speed up to clear the intersection",
    "Honk your horn to alert pedestrians"
  ],
  1078: [
    "A felony criminal offense",
    "A gross misdemeanor charge",
    "A petty misdemeanor charge",
    "An administrative penalty"
  ],
  1079: [
    "Come to a complete stop and proceed only when path is safe and clear",
    "Slow down slightly to ten miles per hour and roll through the turn",
    "Accelerate through the intersection to beat approaching vehicles",
    "Stop only if a law enforcement vehicle is present at the junction"
  ],
  1081: [
    "Maintain steady speed, stay centered in lane, and allow car to pass",
    "Accelerate to prevent the passing vehicle from cutting ahead of you",
    "Move vehicle halfway onto the right shoulder while being overtaken",
    "Flash high-beam headlights repeatedly at the passing automobile"
  ],
  1084: [
    "Reduce speed, increase following gap, and turn on headlights",
    "Turn on high-beam headlights and maintain posted speed limit",
    "Tailgate the vehicle ahead to follow their rear brake lights",
    "Pull onto the shoulder and drive slowly with hazard flashers"
  ],
  1085: [
    "Yield to all vehicles already traveling inside the roundabout",
    "Vehicles inside the roundabout must yield to entering traffic",
    "Always come to a complete stop before entering any roundabout",
    "Change lanes freely while navigating through the roundabout"
  ]
};

drv.forEach(q => {
  if (drvUpdates[q.id]) {
    q.options = drvUpdates[q.id];
  }
});

saveQuestions('./src/data/driverQuestions.ts', 'driverQuestions', drv);
console.log('Driver questions balanced.');

// 3. BALANCE REMAINING CDL QUESTIONS
const cdl = loadQuestions('./src/data/cdlQuestions.ts', 'cdlQuestions');

const cdlUpdates = {
  1022: [
    "Properly rated fire extinguisher, spare electrical fuses, and three reflective warning triangles",
    "A commercial trauma first-aid kit, emergency road flares, and heavy-duty tow recovery cables",
    "Two five-gallon water jugs, heavy iron snow shovel, tire chains, and thermal survival blanket",
    "A battery jumper booster pack, heavy flashlight with spare cells, and reflective barricade tape"
  ],
  1027: [
    "1 second per 10 ft vehicle length under 40 mph, plus 1 second over 40 mph",
    "2 seconds per 10 ft vehicle length across all posted highway speed limits",
    "1 second per 1,000 lbs of total gross commercial combination vehicle weight",
    "A fixed 3-second buffer regardless of commercial vehicle length or speed"
  ],
  1029: [
    "Large commercial trucks require much greater stopping distances and tailgating invites fatal collisions",
    "Tailgating causes the tractor turbocharger wastegate to over-pressurize the intake manifold assembly",
    "Tailgating causes the electronic logging device (ELD) to automatically record a speeding violation",
    "Tailgating reduces diesel fuel efficiency by disrupting clean aerodynamic airflow to the radiator"
  ],
  1030: [
    "To prevent trailing vehicles from trying to pass you on your right blind side",
    "To prevent front steering tires from rubbing against right roadway gutters",
    "To reduce centrifugal forces acting on cargo freight inside the rear trailer",
    "To ensure trailer turn signals remain clearly visible to side cross traffic"
  ],
  1032: [
    "Driver has direct line of sight out window and better mirror views along trailer",
    "Trailer spring brakes release significantly faster when reversing toward the left",
    "Tractor steering gear box offers a sharper turning radius when pivoting to left",
    "Minnesota commercial traffic statutes prohibit backing a vehicle toward right"
  ],
  1033: [
    "Get Out And Look (G.O.A.L.), use a helper, back slowly, and avoid backing when possible",
    "Back as quickly as possible to clear active roadway lanes and minimize traffic delays",
    "Sound high-pressure pneumatic air horn continuously throughout entire backing movement",
    "Rely exclusively on wide-angle convex side mirrors without turning your head or body"
  ],
  1035: [
    "Time needed for air to flow through brake lines to chambers (about 0.5 second)",
    "Mechanical delay when brake shoes retract from drum during truck acceleration",
    "Electrical latency in the tractor anti-lock braking system (ABS) controller",
    "Time required for air compressor to build storage tank pressure to 100 psi"
  ],
  1051: [
    "Select low gear, apply brakes firmly to drop 5 mph below safe speed, release, and repeat",
    "Maintain continuous light foot pressure on brake pedal throughout entire downhill descent",
    "Shift transmission to neutral and rely entirely on trailer hand valve to regulate speed",
    "Pump brake pedal rapidly twenty to thirty times per minute to keep brake linings cool"
  ],
  1058: [
    "Rearward amplification causes rear trailer to swing much more violently than tractor in turns",
    "Tractor drive wheels hop violently when accelerating from dead stop on slick asphalt roads",
    "Loud whipping sound produced when glad hand rubber coupling seals separate under pressure",
    "Rapid back-and-forth movement of fifth wheel slider plate when hauling heavy bulk liquids"
  ],
  1061: [
    "Look inside fifth wheel with flashlight to ensure jaws are fully closed around kingpin shank",
    "Rely solely on the loud clunk sound heard from cab when backing into trailer kingpin apron",
    "Tap dashboard trailer supply knob and confirm storage air pressure remains above 100 psi",
    "Drive forward 100 feet at highway speed to test whether trailer tracks straight behind cab"
  ],
  1062: [
    "Gently pull forward against locked trailer brakes in low gear to confirm jaws are locked",
    "Pull emergency breakaway cable by hand to test whether trailer parking brakes apply firmly",
    "Vigorously pull glad hand rubber hoses to check for loose brass fittings and air leakage",
    "Rock steering wheel left and right while reversing to check for fifth wheel lateral play"
  ],
  1064: [
    "Lower gear to firm ground contact, then crank extra turns in low gear to lift weight off tractor",
    "Lower landing gear until two inches above ground so it does not drag when tractor pulls away",
    "Leave landing gear in high gear without ground contact to let tractor air suspension dump air",
    "Lower only driver-side landing leg and chock passenger-side trailer tandem wheels on ground"
  ],
  1069: [
    "Maximum allowable total weight of a single vehicle plus complete cargo payload specified by maker",
    "Actual weight of empty truck and trailer before cargo, fuel, or driver is placed on the vehicle",
    "Combined scale weight of tractor and connected trailers measured at state highway weigh station",
    "Maximum permissible weight on steering axle under federal highway bridge weight formula limits"
  ],
  1070: [
    "Maximum allowable total weight of combination vehicle (power unit plus trailer and cargo) by maker",
    "Sum of empty tractor weight plus weight of driver and thirty gallons of diesel fuel in the tank",
    "Maximum weight permitted on any individual tandem drive axle under interstate highway rules",
    "Total certified payload weight of dry freight loaded into an intermodal shipping container"
  ],
  1076: [
    "No internal barriers exist to restrict front-to-back liquid motion, creating powerful forward surges",
    "Smooth bore tankers have smaller air brake chambers that take twice as long to build air pressure",
    "Lack of internal baffles makes the tanker outer skin weaker and prone to sudden structural failure",
    "Smooth bore tankers cannot be equipped with modern tractor electronic anti-lock braking systems"
  ],
  1087: [
    "Stop braking, steer in direction of skid, and counter-steer smoothly as vehicle straightens",
    "Slam on service brakes immediately to lock all wheels and slide vehicle to an abrupt stop",
    "Pull yellow parking brake knob on dashboard to engage rear drive axle spring brakes firmly",
    "Turn steering wheel sharply in opposite direction of skid while applying full acceleration"
  ],
  1088: [
    "Front wheels lose traction and truck goes straight; ease off gas and let vehicle slow down",
    "Drive wheels lose traction and swing outward; apply trailer hand valve to pull unit straight",
    "Trailer wheels slide toward oncoming traffic; downshift transmission and accelerate firmly",
    "Steering box locks up mechanically; apply maximum foot brake pressure to force wheels skid"
  ],
  1095: [
    "Before end of business day following the day driver received notice of the action",
    "Within 30 calendar days of receiving written notification by mail from the state",
    "Only upon renewing commercial medical examiner certificate every two years at clinic",
    "At annual employer commercial driver qualification file review safety meeting"
  ],
  1100: [
    "Vehicle Overview (approaching vehicle, checking general condition, leaks, damage, and leaning)",
    "Starting the engine and revving tachometer to 2000 RPM to check turbocharger boost pressure",
    "Pumping service brake pedal twenty times to deplete air pressure in secondary reservoir tanks",
    "Backing tractor under trailer kingpin to check fifth wheel jaw locking engagement in the yard"
  ]
};

cdl.forEach(q => {
  if (cdlUpdates[q.id]) {
    q.options = cdlUpdates[q.id];
  }
});

saveQuestions('./src/data/cdlQuestions.ts', 'cdlQuestions', cdl);
console.log('CDL questions balanced.');
