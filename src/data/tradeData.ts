import { TradeData } from '@/types';

export const tradeData: TradeData = {
  'Bricklayer': {
    hazards: [
      { hazard: 'Cement Dermatitis (Contact with wet cement)', controlMeasure: 'Wear alkali-resistant nitrile gloves and apply barrier cream before starting work.', likelihood: 4, severity: 2, initialRisk: 8, residualRisk: 2 },
      { hazard: 'Respirable Crystalline Silica (RCS) Dust', controlMeasure: 'Use water suppression systems when cutting bricks and wear FFP3 respiratory protection.', likelihood: 4, severity: 4, initialRisk: 16, residualRisk: 4 },
      { hazard: 'Working at Height (Falls from scaffolding)', controlMeasure: 'Ensure scaffolding is erected by competent persons with guardrails and toe boards installed.', likelihood: 3, severity: 5, initialRisk: 15, residualRisk: 3 },
      { hazard: 'Manual Handling (Repetitive lifting)', controlMeasure: 'Use mechanical aids (e.g., block splitters, hods) and rotate tasks to reduce strain.', likelihood: 4, severity: 3, initialRisk: 12, residualRisk: 4 },
      { hazard: 'Falling Objects', controlMeasure: 'Wear safety helmets (hard hats) at all times and establish exclusion zones below work areas.', likelihood: 3, severity: 4, initialRisk: 12, residualRisk: 3 }
    ],
    ppe: ['Hard Hat', 'Safety Boots (Steel Toe)', 'Hi-Vis Vest', 'Gloves (Nitrile/Grip)', 'Eye Protection', 'FFP3 Mask'],
    tools: ['Trowel', 'Spirit Level', 'Cement Mixer', 'Shovel', 'Brick Hammer', 'Line & Pins', 'Block Splitter'],
    sequence: [
      '1. Arrive on site and report to the site office for induction.',
      '2. Inspect the work area and ensure it is safe to proceed.',
      '3. Check scaffolding is tagged and safe for use.',
      '4. Set up the mixing station in a designated area.',
      '5. Mix mortar using the cement mixer, ensuring dust suppression.',
      '6. Transport materials to the work area safely.',
      '7. Lay bricks/blocks according to the drawings.',
      '8. Keep the work area tidy and free of trip hazards.',
      '9. Clean tools and equipment at the end of the shift.',
      '10. Dispose of waste in designated skips.'
    ]
  },
  'Cleaner': {
    hazards: [
      { hazard: 'Slips and Trips (Wet floors)', controlMeasure: 'Use "Wet Floor" warning signs and clean up spills immediately; dry mop where possible.' },
      { hazard: 'Chemical Exposure (Cleaning agents)', controlMeasure: 'Follow COSHH assessments, wear protective gloves/goggles, and ensure good ventilation.' },
      { hazard: 'Dermatitis (Prolonged wet work)', controlMeasure: 'Wear rubber or nitrile gloves and use moisturising cream after washing hands.' },
      { hazard: 'Manual Handling (Moving furniture)', controlMeasure: 'Assess the load before lifting, use trolleys for heavy items, and use correct lifting technique.' },
      { hazard: 'Lone Working', controlMeasure: 'Implement a check-in procedure with a supervisor and provide a personal safety device/alarm.' }
    ],
    ppe: ['Safety Shoes (Non-slip)', 'Gloves (Rubber/Nitrile)', 'Tabard/Uniform', 'Eye Protection (Splash proof)'],
    tools: ['Mop & Bucket', 'Vacuum Cleaner', 'Cleaning Trolley', 'Microfibre Cloths', 'Warning Signs', 'Chemical Caddy'],
    sequence: [
      '1. Arrive on site and sign in.',
      '2. Check the cleaning schedule and required tasks.',
      '3. Inspect equipment for any damage before use.',
      '4. Place "Wet Floor" signs where necessary.',
      '5. Prepare cleaning solutions following COSHH guidelines.',
      '6. Carry out cleaning tasks (dusting, vacuuming, mopping).',
      '7. Empty bins and dispose of waste correctly.',
      '8. Clean and store equipment safely.',
      '9. Remove warning signs once floors are dry.',
      '10. Sign out and report any issues.'
    ]
  },
  'Landscaper': {
    hazards: [
      { hazard: 'Hand-Arm Vibration Syndrome (HAVS)', controlMeasure: 'Monitor trigger times, use low-vibration tools, and rotate staff on vibrating machinery.' },
      { hazard: 'Manual Handling (Heavy materials)', controlMeasure: 'Use wheelbarrows or mechanical lifters for heavy materials; use team lifting for large items.' },
      { hazard: 'Biological Hazards (Soil/Water)', controlMeasure: 'Wear heavy-duty gloves, cover open wounds with waterproof dressings, and wash hands before eating.' },
      { hazard: 'Noise (Machinery)', controlMeasure: 'Wear appropriate hearing protection (ear defenders/plugs) when operating loud machinery.' },
      { hazard: 'Sun Exposure / UV Radiation', controlMeasure: 'Wear long sleeves/trousers, apply high-factor sunscreen, and take breaks in the shade.' }
    ],
    ppe: ['Safety Boots', 'Gloves (Rigger/Heavy Duty)', 'Ear Defenders', 'Eye Protection', 'Hi-Vis Vest', 'Sun Hat/Screen'],
    tools: ['Spade/Shovel', 'Rake', 'Wheelbarrow', 'Lawnmower', 'Strimmer', 'Hedge Trimmer', 'Leaf Blower'],
    sequence: [
      '1. Arrive on site and assess the area for hazards (e.g., hidden debris).',
      '2. Unload tools and equipment safely.',
      '3. Cordon off the work area if public access is possible.',
      '4. Don appropriate PPE for the task (e.g., ear defenders for mowing).',
      '5. Carry out landscaping tasks (mowing, digging, planting).',
      '6. Use mechanical aids for moving heavy soil or stones.',
      '7. Take regular breaks to avoid fatigue and vibration exposure.',
      '8. Clear up all green waste and debris.',
      '9. Clean tools and check for damage.',
      '10. Load vehicle and secure load for transport.'
    ]
  },
  'Plumber': {
    hazards: [
      { hazard: 'Hot Works (Soldering/Blowtorch)', controlMeasure: 'Use a heat mat, have a fire extinguisher nearby, and wait for pipes to cool before touching.' },
      { hazard: 'Water Damage / Flooding', controlMeasure: 'Isolate water supply before starting work and check for leaks immediately after restoring supply.' },
      { hazard: 'Confined Spaces (Under floors/lofts)', controlMeasure: 'Ensure adequate lighting, inform someone of your location, and limit time spent in tight spaces.' },
      { hazard: 'Biological Hazards (Sewage)', controlMeasure: 'Wear waterproof gloves and protective clothing; wash hands thoroughly with antibacterial soap.' },
      { hazard: 'Asbestos (Old pipe lagging)', controlMeasure: 'Stop work immediately if suspicious material is found; do not disturb it and report to the client.' }
    ],
    ppe: ['Safety Boots', 'Gloves (Heat Resistant/Nitrile)', 'Knee Pads', 'Eye Protection', 'Hi-Vis Vest'],
    tools: ['Adjustable Wrench', 'Pipe Cutter', 'Blowtorch', 'Soldering Mat', 'Spirit Level', 'Drill', 'Plunger'],
    sequence: [
      '1. Arrive on site and introduce yourself to the client.',
      '2. Locate the stopcock and isolate the water supply.',
      '3. Drain the system if necessary.',
      '4. Prepare the work area (dust sheets, move furniture).',
      '5. Carry out the plumbing work (cutting, soldering, fitting).',
      '6. Check all joints for tightness.',
      '7. Restore water supply slowly and check for leaks.',
      '8. Bleed radiators if required.',
      '9. Clean up the work area and dispose of old parts.',
      '10. Demonstrate the work to the client and sign off.'
    ]
  },
  'Electrician': {
    hazards: [
      { hazard: 'Electric Shock / Electrocution', controlMeasure: 'Safe isolation procedure: Lock off, tag, and test before touching any conductors.' },
      { hazard: 'Working at Height (Ladders/Steps)', controlMeasure: 'Use fiberglass (non-conductive) ladders and ensure they are stable.' },
      { hazard: 'Dust / Debris (Chasing walls)', controlMeasure: 'Use dust extraction on tools and wear a dust mask/respirator.' },
      { hazard: 'Asbestos (Fuse boards/Artex)', controlMeasure: 'Be aware of potential asbestos locations; stop work if suspected.' },
      { hazard: 'Slips/Trips (Cables)', controlMeasure: 'Keep cables tidy and taped down where possible; remove waste immediately.' }
    ],
    ppe: ['Safety Boots (Insulated)', 'Gloves', 'Eye Protection', 'Dust Mask', 'Voltage Indicator (Proving Unit)'],
    tools: ['VDE Screwdrivers', 'Wire Strippers', 'Multimeter/Tester', 'Side Cutters', 'Drill', 'Wall Chaser', 'Fish Tape'],
    sequence: [
      '1. Arrive on site and identify the scope of work.',
      '2. Identify the consumer unit and relevant circuits.',
      '3. Perform safe isolation: Switch off, Lock off, Tag off.',
      '4. Prove dead using a voltage indicator.',
      '5. Carry out the electrical installation/repair.',
      '6. Perform visual inspection of the work.',
      '7. Carry out dead testing (Continuity, Insulation Resistance).',
      '8. Energise the circuit and perform live testing (Earth Loop, RCD).',
      '9. Issue minor works or installation certificate.',
      '10. Tidy up and explain operation to the client.'
    ]
  },
  'Carpenter': {
    hazards: [
      { hazard: 'Wood Dust (Inhalation)', controlMeasure: 'Use tools with dust extraction and wear an appropriate dust mask.' },
      { hazard: 'Sharp Tools (Saws/Chisels)', controlMeasure: 'Keep tools sharp (dull tools slip), cut away from the body, and store safely.' },
      { hazard: 'Noise (Power tools)', controlMeasure: 'Wear ear defenders when using circular saws, routers, or planers.' },
      { hazard: 'Working at Height (Roofing/Joists)', controlMeasure: 'Use appropriate access equipment (scaffold/platforms) and fall protection.' },
      { hazard: 'Manual Handling (Timber/Doors)', controlMeasure: 'Get assistance for long or heavy lengths of timber; use correct lifting technique.' }
    ],
    ppe: ['Safety Boots', 'Gloves (Cut Resistant)', 'Eye Protection', 'Dust Mask (FFP2/3)', 'Ear Defenders'],
    tools: ['Hammer', 'Tape Measure', 'Chisels', 'Hand Saw', 'Circular Saw', 'Drill/Driver', 'Square'],
    sequence: [
      '1. Arrive on site and review drawings/measurements.',
      '2. Set up a safe cutting station (workbench/saw horses).',
      '3. Measure and mark materials accurately.',
      '4. Cut timber to size using appropriate saws.',
      '5. Assemble or install components (stud work, doors, frames).',
      '6. Fix securely using nails, screws, or adhesive.',
      '7. Sand down rough edges.',
      '8. Check work with a spirit level and square.',
      '9. Clean up sawdust and offcuts regularly.',
      '10. Inspect final work with the client.'
    ]
  },
  'Painter & Decorator': {
    hazards: [
      { hazard: 'Working at Height (Ladders)', controlMeasure: 'Secure ladders properly; do not overreach; use platforms for ceilings if possible.' },
      { hazard: 'Hazardous Substances (Paints/Solvents)', controlMeasure: 'Ensure good ventilation; wear a mask if sanding or using solvent-based paints.' },
      { hazard: 'Slips/Trips (Dust sheets/Spills)', controlMeasure: 'Lay dust sheets flat and tape edges; clean up spills immediately.' },
      { hazard: 'Manual Handling (Paint tins)', controlMeasure: 'Use handle grips; do not carry too many tins at once.' },
      { hazard: 'Repetitive Strain', controlMeasure: 'Take regular breaks and stretch; use extension poles for ceilings.' }
    ],
    ppe: ['Safety Shoes', 'Overalls/Whites', 'Gloves', 'Eye Protection (when sanding/overhead)', 'Dust Mask'],
    tools: ['Brushes', 'Rollers', 'Paint Tray', 'Scraper', 'Sandpaper', 'Dust Sheets', 'Masking Tape'],
    sequence: [
      '1. Arrive on site and assess the room/area.',
      '2. Move furniture and cover floors with dust sheets.',
      '3. Prepare surfaces: Fill holes, sand down, and clean.',
      '4. Mask off edges, sockets, and switches.',
      '5. Apply primer or undercoat if required.',
      '6. Apply first coat of paint (cutting in first, then rolling).',
      '7. Allow to dry according to manufacturer instructions.',
      '8. Apply second coat.',
      '9. Remove masking tape while paint is slightly wet (if appropriate).',
      '10. Clean brushes/rollers and tidy up the room.'
    ]
  },
  'Tiler': {
    hazards: [
      { hazard: 'Dust Inhalation (Cutting tiles)', controlMeasure: 'Use wet cutters where possible or tools with dust extraction; wear FFP3 mask.' },
      { hazard: 'Manual Handling (Heavy tiles/Adhesive)', controlMeasure: 'Lift boxes correctly; do not overload; use mechanical aids for heavy stone.' },
      { hazard: 'Dermatitis (Adhesives/Grouts)', controlMeasure: 'Wear nitrile gloves when mixing or applying adhesives and grouts.' },
      { hazard: 'Cuts/Lacerations (Sharp tiles)', controlMeasure: 'Wear cut-resistant gloves when handling cut tiles; dispose of sharps safely.' },
      { hazard: 'Knee Injuries (Prolonged kneeling)', controlMeasure: 'Wear industrial knee pads and take regular breaks to stretch.' }
    ],
    ppe: ['Safety Boots', 'Gloves (Nitrile/Cut Resistant)', 'Knee Pads', 'Eye Protection', 'Dust Mask (FFP3)'],
    tools: ['Tile Cutter (Manual/Wet)', 'Trowel', 'Grout Float', 'Spacers', 'Spirit Level', 'Bucket', 'Sponge'],
    sequence: [
      '1. Arrive on site and check the substrate is clean and level.',
      '2. Set out the tiling layout to minimize cuts.',
      '3. Mix adhesive according to manufacturer instructions.',
      '4. Apply adhesive to the surface using a notched trowel.',
      '5. Place tiles firmly and insert spacers.',
      '6. Cut tiles to fit edges and corners using appropriate cutters.',
      '7. Allow adhesive to set (usually 24 hours).',
      '8. Mix and apply grout to the joints.',
      '9. Clean off excess grout with a sponge before it hardens.',
      '10. Polish tiles and dispose of waste.'
    ]
  },
  'Flooring Contractor': {
    hazards: [
      { hazard: 'Inhalation of Vapours (Adhesives)', controlMeasure: 'Ensure good ventilation; wear appropriate respiratory protection if required.' },
      { hazard: 'Manual Handling (Carpet rolls/Laminate)', controlMeasure: 'Use two people for heavy rolls; use trolleys for transport.' },
      { hazard: 'Cuts (Knives/Blades)', controlMeasure: 'Use retractable blades; cut away from the body; store blades safely.' },
      { hazard: 'Knee Injuries', controlMeasure: 'Wear knee pads and rotate tasks.' },
      { hazard: 'Dust (Sanding floors)', controlMeasure: 'Use dust extraction systems and wear dust masks.' }
    ],
    ppe: ['Safety Boots', 'Gloves', 'Knee Pads', 'Eye Protection', 'Dust Mask'],
    tools: ['Stanley Knife', 'Kicker', 'Bolster', 'Trowel', 'Saw', 'Measuring Tape', 'Roller'],
    sequence: [
      '1. Arrive on site and check subfloor condition (moisture/levels).',
      '2. Acclimatise materials if necessary (e.g., wood flooring).',
      '3. Prepare the subfloor (screed/plywood).',
      '4. Measure and cut underlay/flooring material.',
      '5. Apply adhesive (if gluing) or lay floating floor.',
      '6. Install flooring, ensuring tight joints.',
      '7. Trim excess material and fit door bars/skirting.',
      '8. Clean the finished floor.',
      '9. Remove all offcuts and packaging.',
      '10. Inspect with client and sign off.'
    ]
  },
  'Roofer': {
    hazards: [
      { hazard: 'Falls from Height', controlMeasure: 'Use scaffolding, edge protection, or fall arrest systems; secure ladders.' },
      { hazard: 'Falling Objects', controlMeasure: 'Use chutes for debris; establish exclusion zones below; wear hard hats.' },
      { hazard: 'Manual Handling (Tiles/Felt)', controlMeasure: 'Use hoists or elevators for lifting materials to roof level.' },
      { hazard: 'Weather Conditions', controlMeasure: 'Do not work in high winds, heavy rain, or icy conditions.' },
      { hazard: 'Asbestos (Old roofs)', controlMeasure: 'Check for asbestos before disturbing old materials; stop work if suspected.' }
    ],
    ppe: ['Hard Hat', 'Safety Boots (Non-slip)', 'Gloves', 'Hi-Vis Vest', 'Harness (if required)'],
    tools: ['Hammer', 'Roof Ladder', 'Utility Knife', 'Trowel', 'Chalk Line', 'Tape Measure', 'Hoist'],
    sequence: [
      '1. Arrive on site and check access equipment (scaffold) is safe.',
      '2. Strip existing roof covering (if re-roofing) and dispose via chute.',
      '3. Inspect roof structure/timbers for rot or damage.',
      '4. Install breathable membrane and battens.',
      '5. Load tiles/slates onto the roof safely.',
      '6. Lay tiles/slates starting from the eaves upwards.',
      '7. Install ridge tiles and verges (dry fix or mortar).',
      '8. Check lead flashing and gutters.',
      '9. Clear all debris from the roof and gutters.',
      '10. Remove access equipment carefully.'
    ]
  },
  'Scaffolder': {
    hazards: [
      { hazard: 'Falls from Height', controlMeasure: 'Work in accordance with SG4:15; use harnesses and clip on.' },
      { hazard: 'Falling Objects', controlMeasure: 'Wear hard hats; use gin wheels/ropes for lifting; install toe boards.' },
      { hazard: 'Manual Handling (Poles/Boards)', controlMeasure: 'Use team lifting; pass materials systematically; wear grip gloves.' },
      { hazard: 'Collapse of Structure', controlMeasure: 'Build to design; ensure firm ground/base plates; tie in to building.' },
      { hazard: 'Public Safety', controlMeasure: 'Segregate work area; obtain pavement license if required.' }
    ],
    ppe: ['Hard Hat', 'Safety Boots', 'Gloves (Grip)', 'Hi-Vis Vest', 'Safety Harness (Fall Arrest)'],
    tools: ['Scaffold Spanner', 'Spirit Level', 'Tape Measure', 'Hammer', 'Gin Wheel', 'Rope', 'Tagging System'],
    sequence: [
      '1. Arrive on site and check ground conditions/foundations.',
      '2. Establish exclusion zone around the base.',
      '3. Lay out base plates and sole boards.',
      '4. Erect first lift of scaffolding, ensuring it is level.',
      '5. Install guardrails and toe boards before accessing the platform.',
      '6. Pass up materials for the next lift safely.',
      '7. Tie scaffold to the structure as per design.',
      '8. Install ladder access and trapdoors.',
      '9. Inspect the structure and attach "Scafftag".',
      '10. Hand over to the client with a handover certificate.'
    ]
  },
  'Plasterer': {
    hazards: [
      { hazard: 'Dust (Mixing/Sanding)', controlMeasure: 'Wear dust masks; mix outdoors or in ventilated areas.' },
      { hazard: 'Dermatitis (Wet plaster)', controlMeasure: 'Wear barrier cream and waterproof gloves; wash skin immediately if splashed.' },
      { hazard: 'Working at Height (Ceilings)', controlMeasure: 'Use hop-ups or podium steps; do not overreach.' },
      { hazard: 'Manual Handling (Bags of plaster)', controlMeasure: 'Lift bags correctly; use a trolley; mix in manageable quantities.' },
      { hazard: 'Slips/Trips (Spills)', controlMeasure: 'Keep mixing area clean; clean up spills immediately.' }
    ],
    ppe: ['Safety Boots', 'Gloves (Waterproof)', 'Eye Protection', 'Dust Mask', 'Overalls'],
    tools: ['Trowel', 'Hawk', 'Mixing Drill', 'Bucket', 'Spirit Level', 'Straight Edge', 'Sponge'],
    sequence: [
      '1. Arrive on site and protect floors/fixtures with sheets.',
      '2. Prepare the background (PVA bond or dampening).',
      '3. Mix plaster to the correct consistency.',
      '4. Apply first coat (scratch coat) if required.',
      '5. Apply finish coat (skim) evenly.',
      '6. Trowel up to a smooth finish as it sets.',
      '7. Clean tools and mixing buckets immediately.',
      '8. Remove waste plaster and clean the work area.',
      '9. Remove protective sheeting.',
      '10. Allow plaster to dry before painting.'
    ]
  },
  'Handyman': {
    hazards: [
      { hazard: 'Use of Power Tools', controlMeasure: 'Inspect tools before use; wear eye protection; ensure guards are in place.' },
      { hazard: 'Working at Height (Ladders)', controlMeasure: 'Use stable ladders; secure top and bottom; do not overreach.' },
      { hazard: 'Manual Handling', controlMeasure: 'Assess loads before lifting; use trolleys where possible.' },
      { hazard: 'Electrical Safety (Minor works)', controlMeasure: 'Isolate power before starting; use insulated tools; do not touch live wires.' },
      { hazard: 'Slips, Trips, Falls', controlMeasure: 'Keep work area clear of cables and debris.' }
    ],
    ppe: ['Safety Boots', 'Gloves', 'Eye Protection', 'Dust Mask', 'Ear Defenders'],
    tools: ['Drill', 'Screwdrivers', 'Hammer', 'Pliers', 'Saw', 'Spirit Level', 'Tape Measure'],
    sequence: [
      '1. Arrive on site and discuss requirements with the client.',
      '2. Assess the work area for hazards (cables, pipes).',
      '3. Protect the surrounding area with dust sheets.',
      '4. Carry out the required task (e.g., hanging shelves, assembling furniture).',
      '5. Ensure all fixings are secure and level.',
      '6. Clean up dust and debris.',
      '7. Inspect the work with the client.',
      '8. Pack away tools and materials.',
      '9. Dispose of waste responsibly.',
      '10. Sign off the job.'
    ]
  },
  'Window Cleaner': {
    hazards: [
      { hazard: 'Falls from Height (Ladders)', controlMeasure: 'Use water-fed poles where possible to work from ground; secure ladders if used.' },
      { hazard: 'Slips and Trips (Wet surfaces)', controlMeasure: 'Wear non-slip footwear; clean up spills; manage hoses.' },
      { hazard: 'Manual Handling (Water tanks/Poles)', controlMeasure: 'Fill tanks close to vehicle; use correct lifting technique for poles.' },
      { hazard: 'Chemical Exposure (Detergents)', controlMeasure: 'Wear gloves; follow COSHH assessment for cleaning agents.' },
      { hazard: 'Weather Conditions', controlMeasure: 'Avoid working in high winds or icy conditions.' }
    ],
    ppe: ['Safety Boots (Non-slip)', 'Gloves (Waterproof)', 'Hi-Vis Vest', 'Eye Protection (if using chemicals)', 'Warm Clothing'],
    tools: ['Water-fed Pole System', 'Ladders', 'Squeegee', 'Applicator', 'Bucket', 'Scraper', 'Microfibre Cloths'],
    sequence: [
      '1. Arrive on site and assess access/ground conditions.',
      '2. Set up water-fed pole system or secure ladder.',
      '3. Cordon off the work area if in a public place.',
      '4. Apply cleaning solution to the glass.',
      '5. Agitate dirt with the brush/applicator.',
      '6. Rinse thoroughly with pure water (if using pole system).',
      '7. Squeegee off excess water (if using traditional method).',
      '8. Wipe down sills and frames.',
      '9. Move to the next window safely.',
      '10. Pack away equipment and check client satisfaction.'
    ]
  },
  'HVAC Engineer': {
    hazards: [
      { hazard: 'Working at Height (Roof units)', controlMeasure: 'Use fixed access or MEWPs; wear fall restraint if near edges.' },
      { hazard: 'Electrical Shock', controlMeasure: 'Isolate power supply; Lock Out Tag Out (LOTO); test before touch.' },
      { hazard: 'Refrigerant Gases', controlMeasure: 'Ensure good ventilation; wear gloves/goggles; use leak detectors.' },
      { hazard: 'Manual Handling (Units/Ducting)', controlMeasure: 'Use lifting aids/hoists for heavy units; team lift where necessary.' },
      { hazard: 'Confined Spaces (Ducts/Lofts)', controlMeasure: 'Assess space; ensure ventilation; have a rescue plan.' }
    ],
    ppe: ['Safety Boots', 'Gloves (Nitrile/Thermal)', 'Eye Protection', 'Hard Hat', 'Hi-Vis Vest'],
    tools: ['Manifold Gauge', 'Vacuum Pump', 'Drill', 'Wrenches', 'Multimeter', 'Thermometer', 'Leak Detector'],
    sequence: [
      '1. Arrive on site and report to facilities manager.',
      '2. Review system logs and identify faults/maintenance needs.',
      '3. Isolate electrical and mechanical power sources (LOTO).',
      '4. Access the unit safely (roof/ceiling).',
      '5. Clean filters and inspect coils.',
      '6. Check refrigerant levels and pressures.',
      '7. Test electrical connections and components.',
      '8. Re-energize and test system operation.',
      '9. Complete service log/F-Gas records.',
      '10. Clear work area and handover to client.'
    ]
  },
  'Locksmith': {
    hazards: [
      { hazard: 'Use of Power Tools (Drills/Grinders)', controlMeasure: 'Wear eye protection; check tools; ensure no loose clothing.' },
      { hazard: 'Sharp Objects (Metal swarf/Burrs)', controlMeasure: 'Wear cut-resistant gloves; clean up swarf with a magnet/brush.' },
      { hazard: 'Manual Handling (Doors)', controlMeasure: 'Use door lifters/wedges; ask for assistance if removing heavy doors.' },
      { hazard: 'Lone Working', controlMeasure: 'Maintain contact with office/family; carry a mobile phone.' },
      { hazard: 'Driving (Between jobs)', controlMeasure: 'Plan routes; take breaks; maintain vehicle.' }
    ],
    ppe: ['Safety Boots', 'Gloves (Cut Resistant)', 'Eye Protection', 'Ear Defenders', 'Dust Mask'],
    tools: ['Drill', 'Pick Set', 'Screwdrivers', 'Chisels', 'Hammer', 'Key Cutting Machine', 'Lubricant'],
    sequence: [
      '1. Arrive on site and verify client ID/ownership.',
      '2. Assess the lock/door issue.',
      '3. Attempt non-destructive entry (picking/bypassing) first.',
      '4. If drilling is required, warn client of noise/debris.',
      '5. Drill lock carefully, wearing eye protection.',
      '6. Remove old lock and clean out the mortice.',
      '7. Install new lock and check alignment.',
      '8. Test lock operation with the door open and closed.',
      '9. Cut extra keys if requested.',
      '10. Clean up debris and hand over keys to client.'
    ]
  },
  'Glazier': {
    hazards: [
      { hazard: 'Cuts and Lacerations (Glass)', controlMeasure: 'Wear wrist guards and cut-resistant gloves/sleeves; handle with care.' },
      { hazard: 'Manual Handling (Glass panes)', controlMeasure: 'Use glass suckers; team lift; carry vertically.' },
      { hazard: 'Working at Height', controlMeasure: 'Use scaffolding/towers for high windows; secure ladders.' },
      { hazard: 'Falling Objects (Old glass)', controlMeasure: 'Create exclusion zone; carefully remove old putty/beads.' },
      { hazard: 'Slips/Trips (Broken glass)', controlMeasure: 'Sweep up immediately; use a bin for sharps.' }
    ],
    ppe: ['Safety Boots', 'Gloves (Cut Resistant Level 5)', 'Wrist Guards', 'Eye Protection', 'Hard Hat'],
    tools: ['Glass Suckers', 'Putty Knife', 'Chisel', 'Hammer', 'Glass Cutter', 'Caulking Gun', 'Pry Bar'],
    sequence: [
      '1. Arrive on site and measure the opening.',
      '2. Inspect the frame for damage or rot.',
      '3. Remove old glazing beads or putty carefully.',
      '4. Remove the old glass pane (using suckers if intact).',
      '5. Clean and prime the rebate.',
      '6. Apply bedding putty or glazing tape.',
      '7. Lift the new pane into place using suckers.',
      '8. Secure with glazing sprigs/clips and apply face putty/beads.',
      '9. Clean the glass and remove all debris.',
      '10. Inspect for scratches or defects.'
    ]
  },
  'Groundworker': {
    hazards: [
      { hazard: 'Buried Services', controlMeasure: 'Scan area with CAT scanner; hand dig trial holes.' },
      { hazard: 'Collapse of Excavations', controlMeasure: 'Batter back sides or use trench boxes/shoring for deep excavations.' },
      { hazard: 'Moving Plant/Machinery', controlMeasure: 'Wear hi-vis; establish eye contact with drivers; stay out of blind spots.' },
      { hazard: 'Manual Handling (Kerbs/Slabs)', controlMeasure: 'Use mechanical lifters for heavy items; team lift.' },
      { hazard: 'Dust (Cutting concrete)', controlMeasure: 'Use water suppression on Stihl saws; wear FFP3 mask.' }
    ],
    ppe: ['Hard Hat', 'Safety Boots', 'Hi-Vis Vest', 'Gloves', 'Ear Defenders', 'Dust Mask'],
    tools: ['Shovel', 'Pickaxe', 'CAT Scanner', 'Stihl Saw', 'Wacker Plate', 'Wheelbarrow', 'Laser Level'],
    sequence: [
      '1. Arrive on site and scan for buried services (CAT scan).',
      '2. Mark out the excavation area.',
      '3. Excavate to required depth (using plant or hand tools).',
      '4. Install shoring or batter back sides if required.',
      '5. Prepare the sub-base (compact with wacker plate).',
      '6. Install drainage/services or pour concrete footings.',
      '7. Lay bricks/blocks or kerbs as per drawing.',
      '8. Backfill and compact in layers.',
      '9. Reinstate surface finish.',
      '10. Clear site and remove waste.'
    ]
  },
  'Demolition Operative': {
    hazards: [
      { hazard: 'Falling Debris/Collapse', controlMeasure: 'Follow demolition plan; establish exclusion zones; wear hard hat.' },
      { hazard: 'Asbestos Exposure', controlMeasure: 'Check asbestos survey; do not disturb suspected materials; stop work.' },
      { hazard: 'Dust/Silica', controlMeasure: 'Use water suppression; wear FFP3 masks; ensure ventilation.' },
      { hazard: 'Noise/Vibration', controlMeasure: 'Wear ear defenders; rotate tasks to limit HAVS exposure.' },
      { hazard: 'Sharp Objects', controlMeasure: 'Wear puncture-resistant boots and gloves.' }
    ],
    ppe: ['Hard Hat', 'Safety Boots (Midsole protection)', 'Gloves (Cut/Impact)', 'Eye Protection', 'FFP3 Mask', 'Ear Defenders'],
    tools: ['Sledgehammer', 'Breaker', 'Crowbar', 'Reciprocating Saw', 'Shovel', 'Wheelbarrow', 'Dust Suppression Unit'],
    sequence: [
      '1. Arrive on site and review the demolition plan/asbestos survey.',
      '2. Isolate all services (gas, electric, water).',
      '3. Soft strip fixtures and fittings first.',
      '4. Establish exclusion zones and signage.',
      '5. Begin demolition from the top down (if structural).',
      '6. Sort materials for recycling/disposal as you go.',
      '7. Use water suppression to control dust.',
      '8. Load waste into skips/grab lorries safely.',
      '9. Leave the site safe and secure at end of shift.',
      '10. Final clear up and handover.'
    ]
  },
  'Steel Erector': {
    hazards: [
      { hazard: 'Falls from Height', controlMeasure: 'Use MEWPs; wear safety harness and clip on at all times.' },
      { hazard: 'Crushing/Trapping (Steel beams)', controlMeasure: 'Use tag lines to control loads; keep hands clear of pinch points.' },
      { hazard: 'Falling Objects', controlMeasure: 'Secure tools with lanyards; exclusion zone below lifting operations.' },
      { hazard: 'Manual Handling', controlMeasure: 'Use cranes/telehandlers for lifting; do not lift heavy steel manually.' },
      { hazard: 'Adverse Weather', controlMeasure: 'Stop lifting operations in high winds.' }
    ],
    ppe: ['Hard Hat', 'Safety Boots', 'Gloves (Rigger)', 'Hi-Vis Vest', 'Safety Harness (Fall Arrest)', 'Eye Protection'],
    tools: ['Podger Spanner', 'Drift', 'Impact Wrench', 'Sledgehammer', 'Tag Lines', 'Spirit Level', 'Tape Measure'],
    sequence: [
      '1. Arrive on site and check crane/lifting plan.',
      '2. Unload steelwork and check against drawings.',
      '3. Install holding down bolts/base plates.',
      '4. Attach lifting chains/slings to the first column.',
      '5. Lift column into position and bolt down.',
      '6. Lift beams and connect to columns (using MEWP access).',
      '7. Tighten all bolts to specified torque.',
      '8. Install bracing and secondary steelwork.',
      '9. Check alignment and plumb of the structure.',
      '10. Sign off the frame.'
    ]
  },
  'Welder': {
    hazards: [
      { hazard: 'Arc Eye/UV Radiation', controlMeasure: 'Wear welding visor with correct shade; use welding screens.' },
      { hazard: 'Fumes/Gases', controlMeasure: 'Use local exhaust ventilation (LEV) or air-fed mask.' },
      { hazard: 'Fire/Explosion', controlMeasure: 'Remove combustibles; have fire extinguisher nearby; hot work permit.' },
      { hazard: 'Burns', controlMeasure: 'Wear fire-retardant overalls and gauntlets; allow metal to cool.' },
      { hazard: 'Electric Shock', controlMeasure: 'Check cables/earth clamp; keep equipment dry.' }
    ],
    ppe: ['Welding Visor', 'Fire Retardant Overalls', 'Welding Gauntlets', 'Safety Boots', 'Air-fed Mask (if required)'],
    tools: ['Welding Set (MIG/TIG/Arc)', 'Grinder', 'Chipping Hammer', 'Wire Brush', 'Clamps', 'Magnet', 'Fire Extinguisher'],
    sequence: [
      '1. Arrive on site and obtain Hot Work Permit.',
      '2. Set up welding screen and check ventilation.',
      '3. Prepare the joint (clean/grind).',
      '4. Set up welding plant and earth clamp.',
      '5. Tack weld the components in place.',
      '6. Complete the weld runs as per specification.',
      '7. Remove slag (if Arc) and wire brush the weld.',
      '8. Inspect the weld for defects.',
      '9. Allow to cool and monitor for fire risks (fire watch).',
      '10. Pack away equipment.'
    ]
  },
  'Dryliner': {
    hazards: [
      { hazard: 'Dust (Gypsum)', controlMeasure: 'Wear dust mask when cutting/sanding; ensure ventilation.' },
      { hazard: 'Manual Handling (Plasterboard)', controlMeasure: 'Use board lifters; team lift; carry vertically.' },
      { hazard: 'Cuts (Stanley knives)', controlMeasure: 'Use sharp blades; cut away from body; retract blade when not in use.' },
      { hazard: 'Working at Height', controlMeasure: 'Use hop-ups or podium steps for ceilings.' },
      { hazard: 'Slips/Trips', controlMeasure: 'Keep waste board off the floor; stack materials tidily.' }
    ],
    ppe: ['Safety Boots', 'Gloves (Cut Resistant)', 'Hi-Vis Vest', 'Dust Mask', 'Eye Protection'],
    tools: ['Stanley Knife', 'Screw Gun', 'T-Square', 'Tape Measure', 'Rasp', 'Board Lifter', 'Hammer'],
    sequence: [
      '1. Arrive on site and check setting out.',
      '2. Install metal stud framework (track and stud).',
      '3. Cut plasterboard to size (score and snap).',
      '4. Offer up board to the framework.',
      '5. Fix board using drywall screws (correct spacing).',
      '6. Stagger joints and ensure tight fit.',
      '7. Cut out for sockets/switches.',
      '8. Install corner beads if required.',
      '9. Clear away waste board.',
      '10. Hand over for taping and jointing.'
    ]
  },
  'Solar Panel Installer': {
    hazards: [
      { hazard: 'Falls from Height', controlMeasure: 'Use scaffold/edge protection; harness if required.' },
      { hazard: 'Electric Shock (DC)', controlMeasure: 'Isolate DC strings; cover panels; use insulated tools.' },
      { hazard: 'Manual Handling (Panels)', controlMeasure: 'Use panel lifter or rope system; two-person lift.' },
      { hazard: 'Falling Objects', controlMeasure: 'Secure tools; exclusion zone below.' },
      { hazard: 'Weather', controlMeasure: 'Do not install in high winds or rain (electrical risk).' }
    ],
    ppe: ['Hard Hat', 'Safety Boots', 'Gloves (Grip)', 'Hi-Vis Vest', 'Harness', 'Eye Protection'],
    tools: ['Drill', 'Allen Keys', 'Wire Strippers', 'Crimping Tool', 'Multimeter', 'Ladder', 'Rope'],
    sequence: [
      '1. Arrive on site and check roof access/scaffold.',
      '2. Mark out panel layout on the roof.',
      '3. Install roof hooks/brackets to rafters.',
      '4. Fix mounting rails to the hooks.',
      '5. Lift panels to roof level safely.',
      '6. Connect DC cabling and secure to rails.',
      '7. Clamp panels to the rails.',
      '8. Run DC cables to the inverter location.',
      '9. Test string voltage and polarity.',
      '10. Commission the system.'
    ]
  },
  'Cladding Installer': {
    hazards: [
      { hazard: 'Falls from Height', controlMeasure: 'Use scaffolding with edge protection; wear harness when needed.', likelihood: 3, severity: 5, initialRisk: 15, residualRisk: 3 },
      { hazard: 'Falling Materials', controlMeasure: 'Hoist materials using material hoist; secure panels before releasing.', likelihood: 3, severity: 4, initialRisk: 12, residualRisk: 3 },
      { hazard: 'Cuts from Metal Edges', controlMeasure: 'Wear cut-resistant gloves and handle panels carefully.', likelihood: 4, severity: 2, initialRisk: 8, residualRisk: 2 },
      { hazard: 'Adverse Weather (Wind)', controlMeasure: 'Do not fix large panels in winds above 20mph; secure unfixed panels.', likelihood: 3, severity: 4, initialRisk: 12, residualRisk: 3 },
      { hazard: 'Fire Risk (Post-Grenfell Compliance)', controlMeasure: 'Use only A1/A2-rated non-combustible materials as per Building Regs.', likelihood: 1, severity: 5, initialRisk: 5, residualRisk: 1 }
    ],
    ppe: ['Hard Hat', 'Safety Boots', 'Gloves (Cut-Resistant)', 'Safety Harness', 'Hi-Vis Vest', 'Eye Protection'],
    tools: ['Rivet Gun', 'Nibbler', 'Drill/Driver', 'Spirit Level', 'Measuring Tape', 'Circular Saw', 'Material Hoist'],
    sequence: [
      '1. Check drawings and specifications for panel types.',
      '2. Inspect substrate and fix support rails/battens.',
      '3. Install insulation boards if required.',
      '4. Hoist cladding panels to working level.',
      '5. Fix panels starting from bottom corner.',
      '6. Ensure correct overlap and alignment.',
      '7. Seal joints with fire-rated sealant.',
      '8. Install trims, flashings, and cappings.',
      '9. Check all fixings are secure.',
      '10. Clear site and dispose of offcuts.'
    ]
  },
  'Drainage Engineer': {
    hazards: [
      { hazard: 'Confined Space Entry (Manholes)', controlMeasure: 'Gas test before entry; use ventilation; have top-side attendant.', likelihood: 2, severity: 5, initialRisk: 10, residualRisk: 2 },
      { hazard: 'Biological Hazards (Sewage)', controlMeasure: 'Wear waterproof gloves and coveralls; wash hands thoroughly; hepatitis vaccination.', likelihood: 4, severity: 3, initialRisk: 12, residualRisk: 3 },
      { hazard: 'Leptospirosis (Weil\'s Disease)', controlMeasure: 'Cover cuts with waterproof plasters; avoid hand-to-mouth contact.', likelihood: 2, severity: 5, initialRisk: 10, residualRisk: 2 },
      { hazard: 'Slips and Trips (Wet surfaces)', controlMeasure: 'Wear slip-resistant boots; use barriers and signage.', likelihood: 4, severity: 2, initialRisk: 8, residualRisk: 2 },
      { hazard: 'Traffic (Working in roads)', controlMeasure: 'Use Chapter 8 traffic management; wear hi-vis; use barriers.', likelihood: 3, severity: 5, initialRisk: 15, residualRisk: 3 }
    ],
    ppe: ['Hard Hat', 'Safety Boots (Waterproof)', 'Gloves (Waterproof)', 'Hi-Vis Coveralls', 'Face Shield', 'Respirator'],
    tools: ['Drain Rods', 'CCTV Camera', 'High-Pressure Jetter', 'Manhole Keys', 'Gas Detector', 'Shovel', 'Channelling Tool'],
    sequence: [
      '1. Set up traffic management and signage.',
      '2. Locate manholes and remove covers.',
      '3. Conduct gas test (LEL, O2, H2S).',
      '4. Insert CCTV camera to inspect drains.',
      '5. Identify blockage or damage.',
      '6. Clear blockage using rods or jetter.',
      '7. Re-inspect with camera to confirm clearance.',
      '8. Repair or replace damaged pipework if needed.',
      '9. Test flow and reinstate covers.',
      '10. Complete drainage report and clean equipment.'
    ]
  },
  'Plant Operator': {
    hazards: [
      { hazard: 'Overturning (Excavators/Dumpers)', controlMeasure: 'Check ground stability; do not exceed safe working load; use outriggers.', likelihood: 2, severity: 5, initialRisk: 10, residualRisk: 2 },
      { hazard: 'Striking Underground Services', controlMeasure: 'Obtain CAT scan; hand dig trial holes; use service plans.', likelihood: 3, severity: 5, initialRisk: 15, residualRisk: 3 },
      { hazard: 'Crushing/Run-over', controlMeasure: 'Use banksman; reversing alarms and cameras; exclusion zones.', likelihood: 2, severity: 5, initialRisk: 10, residualRisk: 2 },
      { hazard: 'Vibration (HAVS)', controlMeasure: 'Limit exposure time; use well-maintained equipment; anti-vibration gloves.', likelihood: 4, severity: 3, initialRisk: 12, residualRisk: 4 },
      { hazard: 'Noise Exposure', controlMeasure: 'Wear ear defenders; limit time in cab without hearing protection.', likelihood: 4, severity: 2, initialRisk: 8, residualRisk: 2 }
    ],
    ppe: ['Hard Hat', 'Safety Boots', 'Hi-Vis Vest', 'Gloves (Anti-Vibration)', 'Ear Defenders', 'Seat Belt'],
    tools: ['Excavator', 'Dumper', 'Telehandler', 'CAT Scanner', 'Two-Way Radio', 'Slew Ring Grease Gun'],
    sequence: [
      '1. Conduct daily plant checks (fluid levels, leaks, lights).',
      '2. Obtain permits and check for underground services.',
      '3. Set up exclusion zones and barriers.',
      '4. Start machine and check all controls.',
      '5. Communicate with banksman via radio or hand signals.',
      '6. Begin excavation or lifting operations.',
      '7. Stockpile excavated material safely.',
      '8. Avoid overhead cables and maintain safe distance.',
      '9. Shut down machine and secure on completion.',
      '10. Complete plant logbook.'
    ]
  },
  'Asbestos Removal': {
    hazards: [
      { hazard: 'Asbestos Fibre Inhalation', controlMeasure: 'Full RPE (Powered respirator); wet methods; controlled area; air monitoring.', likelihood: 5, severity: 5, initialRisk: 25, residualRisk: 3 },
      { hazard: 'Contamination Spread', controlMeasure: 'Use decontamination unit; 3-stage airlock; double-bag waste.', likelihood: 4, severity: 5, initialRisk: 20, residualRisk: 3 },
      { hazard: 'Confined Spaces', controlMeasure: 'Ventilation in enclosure; emergency rescue plan; buddy system.', likelihood: 2, severity: 5, initialRisk: 10, residualRisk: 2 },
      { hazard: 'Heat Stress (Full PPE)', controlMeasure: 'Regular breaks; hydration; monitor workers; reduce shift length.', likelihood: 4, severity: 3, initialRisk: 12, residualRisk: 4 },
      { hazard: 'Sharps (Asbestos-containing materials)', controlMeasure: 'Wet materials before breaking; use appropriate tools; wear puncture-resistant gloves.', likelihood: 3, severity: 4, initialRisk: 12, residualRisk: 3 }
    ],
    ppe: ['Full-Face Powered Respirator (TH2P)', 'Disposable Overalls (Type 5)', 'Rubber Boots', 'Double Gloves', 'Duct Tape'],
    tools: ['HEPA Vacuum', 'Spray Bottle', 'Encapsulant', 'Asbestos Waste Bags', 'Air Sampling Pump', 'Decon Unit', 'Neg Pressure Unit (NPU)'],
    sequence: [
      '1. Notify HSE and obtain license (for notifiable work).',
      '2. Set up 3-stage decontamination unit.',
      '3. Build enclosure with polythene sheeting.',
      '4. Install negative pressure unit (NPU) to create -20Pa.',
      '5. Conduct smoke test to check integrity.',
      '6. Don full RPE and protective clothing.',
      '7. Wet asbestos materials with surfactant.',
      '8. Remove asbestos using hand tools (no power tools).',
      '9. Double-bag waste and seal with tape.',
      '10. Decontaminate, shower, and conduct 4-stage clearance test.'
    ]
  },
  'Insulation Installer': {
    hazards: [
      { hazard: 'Skin Irritation (Fibreglass)', controlMeasure: 'Wear long sleeves and gloves; wash hands before eating; barrier cream.', likelihood: 4, severity: 2, initialRisk: 8, residualRisk: 2 },
      { hazard: 'Respiratory Irritation (Fibres/Dust)', controlMeasure: 'Wear FFP2 mask; ensure good ventilation.', likelihood: 4, severity: 3, initialRisk: 12, residualRisk: 3 },
      { hazard: 'Working in Confined Spaces (Lofts)', controlMeasure: 'Use adequate lighting; check joists before walking; do not step between joists.', likelihood: 3, severity: 3, initialRisk: 9, residualRisk: 3 },
      { hazard: 'Working at Height', controlMeasure: 'Use stable platforms; loft boards; do not overreach.', likelihood: 3, severity: 4, initialRisk: 12, residualRisk: 3 },
      { hazard: 'Heat Stress (Loft work in summer)', controlMeasure: 'Take regular breaks; stay hydrated; work during cooler hours.', likelihood: 3, severity: 2, initialRisk: 6, residualRisk: 2 }
    ],
    ppe: ['Disposable Overalls', 'Gloves', 'Dust Mask (FFP2)', 'Hard Hat (in lofts)', 'Knee Pads', 'Eye Protection'],
    tools: ['Utility Knife', 'Insulation Saw', 'Staple Gun', 'Measuring Tape', 'Loft Boards', 'Work Light'],
    sequence: [
      '1. Survey the area and measure dimensions.',
      '2. Check for existing insulation and asbestos.',
      '3. Clear the area and lay loft boards.',
      '4. Cut insulation to size.',
      '5. Install insulation between joists (avoid compressing).',
      '6. Ensure no gaps or cold bridges.',
      '7. Install vapour barrier if required.',
      '8. Insulate around pipes and cables (leave clearance for heat).',
      '9. Check depth meets building regulations (270mm typical).',
      '10. Clear debris and vacuum the area.'
    ]
  },
  'Shopfitter': {
    hazards: [
      { hazard: 'Manual Handling (Display units)', controlMeasure: 'Use trolleys and lifting equipment; work in teams.', likelihood: 4, severity: 3, initialRisk: 12, residualRisk: 3 },
      { hazard: 'Cuts (Glass/Sharp materials)', controlMeasure: 'Wear cut-resistant gloves; use suction lifters for glass.', likelihood: 3, severity: 3, initialRisk: 9, residualRisk: 2 },
      { hazard: 'Dust from Cutting/Drilling', controlMeasure: 'Use extraction on power tools; wear FFP2 mask.', likelihood: 4, severity: 2, initialRisk: 8, residualRisk: 2 },
      { hazard: 'Working at Height (High-level shelving)', controlMeasure: 'Use podiums or MEWPs; never use step ladders for prolonged work.', likelihood: 3, severity: 4, initialRisk: 12, residualRisk: 3 },
      { hazard: 'Electrical Work (Lighting)', controlMeasure: 'Isolate power; only qualified persons to wire lighting.', likelihood: 2, severity: 5, initialRisk: 10, residualRisk: 2 }
    ],
    ppe: ['Safety Boots', 'Gloves (Cut-Resistant)', 'Dust Mask', 'Eye Protection', 'Hi-Vis Vest', 'Knee Pads'],
    tools: ['Mitre Saw', 'Track Saw', 'Drill/Driver', 'Spirit Level', 'Pin Gun', 'Glass Suction Lifter', 'Sack Truck'],
    sequence: [
      '1. Review shop drawings and specifications.',
      '2. Measure site and mark out positions.',
      '3. Install wall panelling and slatwall.',
      '4. Build and install display units.',
      '5. Fit shelving and brackets.',
      '6. Install counters and tills.',
      '7. Fit mirrors and glass panels.',
      '8. Install signage and branding.',
      '9. Connect lighting (by qualified electrician).',
      '10. Final clean and handover.'
    ]
  },
  'Signage Installer': {
    hazards: [
      { hazard: 'Working at Height (High-level signs)', controlMeasure: 'Use MEWPs or scaffolding; wear harness when required.', likelihood: 3, severity: 5, initialRisk: 15, residualRisk: 3 },
      { hazard: 'Electrical Shock (Illuminated signs)', controlMeasure: 'Isolate power before wiring; qualified electrician only.', likelihood: 2, severity: 5, initialRisk: 10, residualRisk: 2 },
      { hazard: 'Manual Handling (Large panels)', controlMeasure: 'Use lifting equipment or work in teams; never lift alone.', likelihood: 3, severity: 3, initialRisk: 9, residualRisk: 2 },
      { hazard: 'Cuts from Sharp Edges (Aluminium)', controlMeasure: 'Wear cut-resistant gloves; file sharp edges.', likelihood: 3, severity: 2, initialRisk: 6, residualRisk: 2 },
      { hazard: 'Traffic (Roadside signs)', controlMeasure: 'Use Chapter 8 traffic management; wear hi-vis; barriers.', likelihood: 3, severity: 5, initialRisk: 15, residualRisk: 3 }
    ],
    ppe: ['Hard Hat', 'Safety Boots', 'Gloves (Cut-Resistant)', 'Hi-Vis Vest', 'Safety Harness', 'Eye Protection'],
    tools: ['Drill/Driver', 'Rivet Gun', 'Spirit Level', 'Measuring Tape', 'Silicone Gun', 'Step Ladder', 'MEWP'],
    sequence: [
      '1. Survey site and check sign positions.',
      '2. Prepare wall surface (clean and fill holes).',
      '3. Mark fixing positions using template.',
      '4. Drill holes and insert fixings.',
      '5. Lift sign into position.',
      '6. Secure sign to wall with bolts.',
      '7. Wire up illumination (if applicable).',
      '8. Test sign is secure and level.',
      '9. Seal edges with silicone if needed.',
      '10. Clear waste and take photos for records.'
    ]
  },
  'Curtain Walling Installer': {
    hazards: [
      { hazard: 'Falls from Height', controlMeasure: 'Use edge protection or harness system; work from inside where possible.', likelihood: 3, severity: 5, initialRisk: 15, residualRisk: 3 },
      { hazard: 'Glass Breakage/Cuts', controlMeasure: 'Use vacuum lifters for glass; wear cut-resistant gloves; safety glasses.', likelihood: 3, severity: 4, initialRisk: 12, residualRisk: 3 },
      { hazard: 'Falling Materials (Glass/Panels)', controlMeasure: 'Secure all materials before releasing; exclusion zones below.', likelihood: 2, severity: 5, initialRisk: 10, residualRisk: 2 },
      { hazard: 'Manual Handling (Heavy mullions)', controlMeasure: 'Use material hoist; work in teams; mechanical lifting aids.', likelihood: 3, severity: 3, initialRisk: 9, residualRisk: 2 },
      { hazard: 'Adverse Weather (Wind)', controlMeasure: 'Do not install glass in winds above 20mph.', likelihood: 3, severity: 4, initialRisk: 12, residualRisk: 3 }
    ],
    ppe: ['Hard Hat', 'Safety Boots', 'Gloves (Cut-Resistant)', 'Safety Harness', 'Hi-Vis Vest', 'Safety Glasses'],
    tools: ['Glass Suction Lifter', 'Torque Wrench', 'Spirit Level', 'Silicone Gun', 'MEWP/Hoist', 'Setting Blocks'],
    sequence: [
      '1. Check drawings and specifications.',
      '2. Survey structure and check tolerances.',
      '3. Fix support brackets to structure.',
      '4. Install mullions (vertical members).',
      '5. Install transoms (horizontal members).',
      '6. Check alignment and plumb.',
      '7. Hoist glazing units to working level.',
      '8. Install glass using suction lifters.',
      '9. Seal all joints with weather seal.',
      '10. Conduct water test and make good.'
    ]
  },
  'Steel Fixer': {
    hazards: [
      { hazard: 'Cuts and Punctures (Rebar ends)', controlMeasure: 'Wear gloves; cap exposed bar ends; never sit on rebar.', likelihood: 4, severity: 3, initialRisk: 12, residualRisk: 3 },
      { hazard: 'Manual Handling (Heavy bars)', controlMeasure: 'Use mechanical lifting for bars over 25kg; work in teams.', likelihood: 4, severity: 3, initialRisk: 12, residualRisk: 3 },
      { hazard: 'Trips over Rebar', controlMeasure: 'Keep work area tidy; highlight trip hazards; wear ankle-supporting boots.', likelihood: 4, severity: 2, initialRisk: 8, residualRisk: 2 },
      { hazard: 'Working at Height (Elevated slabs)', controlMeasure: 'Use edge protection; safety nets; secure walkways.', likelihood: 3, severity: 5, initialRisk: 15, residualRisk: 3 },
      { hazard: 'Hand/Arm Injuries (Tying wire)', controlMeasure: 'Use automatic bar tiers; wear heavy-duty gloves.', likelihood: 4, severity: 2, initialRisk: 8, residualRisk: 2 }
    ],
    ppe: ['Hard Hat', 'Safety Boots (Ankle Support)', 'Heavy-Duty Gloves', 'Hi-Vis Vest', 'Knee Pads', 'Eye Protection'],
    tools: ['Bar Bender', 'Bar Cutter', 'Tying Wire', 'Automatic Tier Gun', 'Rebar Caps', 'Spacers', 'Tape Measure'],
    sequence: [
      '1. Check drawings for bar schedule.',
      '2. Cut and bend rebar to specification.',
      '3. Lay out bottom mat of reinforcement.',
      '4. Tie bars at intersections using wire.',
      '5. Install spacers to maintain concrete cover.',
      '6. Build up steel cage for beams/columns.',
      '7. Fix top mat of reinforcement.',
      '8. Cap all exposed bar ends.',
      '9. Check alignment and levels.',
      '10. Sign off for concrete pour.'
    ]
  }
};
