const vocabulary = {
  "Ship Specifications": [
    {
      term: "Barque",
      definition:
        "Vessel with three or more masts, where all but the aftermost are fully rigged",
    },
    {
      term: "Full-rigger",
      definition: "Vessel with three or more masts, all fully rigged",
    },
    { term: "Square-rigger", definition: "Ship with square sails" },
    { term: "Beam", definition: "Width of ship (12.6m)" },
    { term: "Draught", definition: "Depth below waterline (5.2m)" },
    {
      term: "Knots",
      definition:
        "Speed measurement (18.5 knots / 34.3 km/h top speed under sail)",
    },
    {
      term: "Canvas",
      definition: "Collective term for sails (22 sails total)",
    },
  ],
  Masts: [
    { term: "Foremast", definition: "Forward mast" },
    { term: "Mainmast", definition: "Middle mast" },
    { term: "Mizzenmast", definition: "Aft/rear mast" },
    {
      term: "Lower mast / Standing mast",
      definition: "Bottom section, stepped on keelson",
    },
    { term: "Topmast", definition: "Extends above lower mast" },
    { term: "Topgallant mast", definition: "Extends above topmast" },
    {
      term: "Flagstaff",
      definition: "Uppermost bare pole above highest stays",
    },
  ],
  "Jibs (Headsails)": [
    { term: "Flying jib", definition: "Outermost headsail on the bowsprit" },
    { term: "Outer jib", definition: "Second headsail from the bow" },
    { term: "Inner jib", definition: "Third headsail from the bow" },
    {
      term: "Fore topmast staysail",
      definition: "Staysail set on the fore topmast stay",
    },
  ],
  Staysails: [
    {
      term: "Mizzen topgallant staysail",
      definition: "Staysail set on the mizzen topgallant stay",
    },
    {
      term: "Mizzen topmast staysail",
      definition: "Staysail set on the mizzen topmast stay",
    },
    { term: "Mizzen staysail", definition: "Staysail set on the mizzen stay" },
    {
      term: "Main royal staysail",
      definition: "Staysail set on the main royal stay",
    },
    {
      term: "Main topgallant staysail",
      definition: "Staysail set on the main topgallant stay",
    },
    {
      term: "Main topmast staysail",
      definition: "Staysail set on the main topmast stay",
    },
  ],
  "Square Sails - Foremast": [
    { term: "Fore course", definition: "Largest square sail on foremast" },
    { term: "Fore lower topsail", definition: "Lower topsail on the foremast" },
    { term: "Fore upper topsail", definition: "Upper topsail on the foremast" },
    {
      term: "Fore topgallant sail",
      definition: "Topgallant sail on the foremast",
    },
    { term: "Fore royal", definition: "Royal sail on the foremast" },
  ],
  "Square Sails - Mainmast": [
    {
      term: "Main course (mainsail)",
      definition: "Largest square sail on mainmast",
    },
    { term: "Main lower topsail", definition: "Lower topsail on the mainmast" },
    { term: "Main upper topsail", definition: "Upper topsail on the mainmast" },
    {
      term: "Main topgallant sail",
      definition: "Topgallant sail on the mainmast",
    },
    { term: "Main royal", definition: "Royal sail on the mainmast" },
  ],
  "Mizzen Sails": [
    { term: "Mizzen sail", definition: "Gaff sail on mizzen mast" },
    { term: "Mizzen gaff topsail", definition: "Light-wind sail above mizzen" },
  ],
  "Sail Types": [
    {
      term: "Square sail",
      definition: "4-sided sail under a yard, rigged athwartships",
    },
    {
      term: "Courses",
      definition: "Largest square sails (main course, fore course)",
    },
    { term: "Fore-and-aft sail", definition: "Sail set alongships" },
    { term: "Gaff sail", definition: "Controlled by boom and gaff" },
    {
      term: "Storm sails",
      definition:
        "Lower staysails and lower topsails (reinforced, set first/doused last)",
    },
  ],
  "Sail Parts": [
    { term: "Hanks", definition: "Rings holding sail to stay/mast" },
    { term: "Luff", definition: "Windward edge of sail (attached to stay)" },
    { term: "Leech", definition: "Aft edge of sail" },
    { term: "Foot", definition: "Bottom edge of sail" },
    { term: "Head", definition: "Top of sail" },
    { term: "Tack (corner)", definition: "Where foot meets stay on staysail" },
    {
      term: "Clew",
      definition: "Lower corners of square sail (where sheets attach)",
    },
    {
      term: "Head cringles / Earrings",
      definition: "Top corners of square sail",
    },
    { term: "Peak", definition: "Upper aft corner of gaff sail" },
    { term: "Throat", definition: "Where gaff attaches to mast" },
    { term: "Gaskets", definition: "Ropes for securing furled sails" },
    { term: "Bunt", definition: "Belly/middle of a sail" },
  ],
  Spars: [
    { term: "Spars", definition: "Collective term for masts, yards, booms" },
    {
      term: "Boom",
      definition: "Horizontal spar attached to mast (controls sails)",
    },
    { term: "Gooseneck", definition: "Boom's attachment point to mast" },
    {
      term: "Yard",
      definition:
        "Horizontal spar attached crosswise (square sails attach here)",
    },
    { term: "Yardarm", definition: "Outermost end of yard" },
    {
      term: "Jackstay",
      definition: "Rod on yards for attaching sails/gaskets; also handrail",
    },
    { term: "Barrel", definition: "Holds yard to mast" },
    { term: "Gaff", definition: "Spar supporting top of fore-and-aft sail" },
    { term: "Keelson", definition: "Internal keel where mast is stepped" },
    { term: "Bowsprit", definition: "Spar extending forward from bow" },
  ],
  "Standing Rigging": [
    {
      term: "Stays/Forestays",
      definition: "Wires running fore-aft supporting masts",
    },
    {
      term: "Backstays",
      definition: "Wires preventing masts falling forward/sideways",
    },
    {
      term: "Shrouds",
      definition: "Vertical steel ropes (hold onto these when climbing)",
    },
    {
      term: "Ratlines",
      definition: "Horizontal ropes (ladder rungs, don't hold)",
    },
    {
      term: "Topping lifts",
      definition: "Wires supporting yards horizontally",
    },
    { term: "Turnbuckles", definition: "Wire tensioning devices" },
    { term: "Crosstrees", definition: "Platforms where mast sections join" },
    {
      term: "Futtock shrouds",
      definition: "Steel rods below crosstrees (overhang to climb over)",
    },
    {
      term: "Spreaders",
      definition: "Extend from crosstrees to angle backstays",
    },
    { term: "Horses", definition: "Wires for access/safety in rigging" },
  ],
  "Control Lines": [
    { term: "Halyard", definition: "Raises sail or yard" },
    { term: "Halyard tye", definition: "Wire part of halyard system" },
    { term: "Flag halyard", definition: "Halyard for raising flags" },
    {
      term: "Sheet",
      definition: "Controls sail down/aftward (makes sail draw)",
    },
    {
      term: "Tack (line)",
      definition: "Controls courses down/forward; defines port/starboard tack",
    },
    { term: "Braces", definition: "Lines to rotate yards horizontally" },
    { term: "Vang", definition: "Swings boom horizontally" },
    { term: "Downhauls", definition: "Lines to pull something down" },
    { term: "Outhaul/Inhaul/Uphaul", definition: "Directional control lines" },
    { term: "Boom lift", definition: "Supports boom end" },
    { term: "Topping whip", definition: "Lifting line on mizzen mast" },
  ],
  "Dousing Lines": [
    { term: "Clewline", definition: "Hauls up clew when dousing" },
    {
      term: "Buntline",
      definition: "Hauls foot up to yard (inner/outer/centre)",
    },
    { term: "Leech line", definition: "Pulls leech inward" },
    { term: "Brail", definition: "Hauls mizzen leech toward mast" },
    {
      term: "Collapser",
      definition: "Slang for gaff topsail downhaul (hauls all corners)",
    },
  ],
  "Line Parts & Hardware": [
    { term: "Tail", definition: "End of a line" },
    { term: "Block", definition: "Pulley" },
    { term: "Tackle", definition: "Block system for mechanical advantage" },
    { term: "Purchase", definition: "Mechanical advantage ratio" },
    { term: "Flying block", definition: "Movable block in halyard system" },
    { term: "Fairleads", definition: "Rings guiding lines" },
    { term: "Sheaves", definition: "Wheels inside blocks" },
    { term: "Belaying pin", definition: "Pin for securing lines" },
    {
      term: "Stopper",
      definition:
        "Strop for taking strain off a loaded line (braided stoppers for sail handling)",
    },
    { term: "Bollards", definition: "Posts for securing heavy lines" },
    { term: "Mooring bollard", definition: "Larger bollard for mooring lines" },
    { term: "Widowmakers", definition: "Dangerous blocks on staysail sheets" },
    { term: "Deflector", definition: "Guide for staysail sheets" },
  ],
  Ropework: [
    {
      term: "Knots",
      definition: "Methods of forming loops or stoppers in a single rope",
    },
    { term: "Bends", definition: "Methods for joining two ropes together" },
    {
      term: "Hitches",
      definition:
        "Methods for attaching ropes to spars, rings, or other objects",
    },
    {
      term: "Whipping",
      definition: "Lashing with small-stuff to prevent rope ends from fraying",
    },
    {
      term: "Seizing",
      definition:
        "Permanent lashing using small-stuff or thin wire, finished with knots",
    },
    {
      term: "Lashing",
      definition:
        "Rope lashed or reeved multiple times in same direction to hold fast",
    },
    {
      term: "Reeved",
      definition: "Threaded through (a block, fairlead, or similar)",
    },
    {
      term: "Small-stuff",
      definition: "Thin twine used for whipping and seizing",
    },
    {
      term: "Hawser",
      definition: "Heavy rope or cable used for mooring or towing",
    },
  ],
  "Hull Structure": [
    { term: "Bows", definition: "Foremost part of the hull (the prow)" },
    { term: "Stern", definition: "Rearmost tip of the hull" },
    { term: "Counter", definition: "Overhanging aft of the ship" },
    { term: "Sides", definition: "The hull, both inside and out" },
    {
      term: "Bulwark",
      definition: "Ship's side extending above weather deck level",
    },
    {
      term: "Bulkheads",
      definition: "Interior walls (equivalent to walls in a house)",
    },
    { term: "Transom", definition: "Flat stern surface" },
    { term: "Rudder", definition: "Steering blade beneath the hull" },
  ],
  "Deck Structure": [
    {
      term: "Gutters",
      definition: "Channels between ship's side and deck to carry water away",
    },
    {
      term: "Scuppers",
      definition:
        "Drains from gutters to the sea (foremost used for food waste)",
    },
    {
      term: "Freeing port",
      definition: "Hinged hatch in bulwark to evacuate stormwater",
    },
    { term: "Railings", definition: "Protective 'fence' around a deck" },
    {
      term: "Gunwhale/rail",
      definition: "Sits on top of railings and bulwarks",
    },
    { term: "Grating", definition: "Slatted deck covering" },
  ],
  "Main Deck Areas": [
    { term: "Main deck", definition: "Primary deck of the ship" },
    {
      term: "Forecastle",
      definition: "Most forward part of ship (lookout posted here)",
    },
    { term: "Forecastle deck", definition: "Forward raised deck" },
    { term: "Poop", definition: "Aft deck area" },
    { term: "Foredeck", definition: "Forward deck area" },
    { term: "Half deck", definition: "Mid-ship deck area" },
    { term: "Tween deck", definition: "Deck between main deck and below" },
    {
      term: "Amidships/Midships",
      definition: "Center of ship; also describes rudder angle of zero",
    },
    { term: "Foreside", definition: "Front side of yard" },
  ],
  "Below Deck": [
    { term: "Below deck", definition: "Under the main deck" },
    {
      term: "Banjer",
      definition: "Trainee sleeping/living area below deck (one fore, one aft)",
    },
    { term: "Companionways", definition: "Stairways between decks" },
    { term: "Companion ladder", definition: "Stairway between decks" },
    { term: "Chart house", definition: "Navigation room" },
    { term: "Galley", definition: "Kitchen area" },
    { term: "Sickbay", definition: "Medical facility on board" },
    { term: "Slop chest", definition: "Ship's kiosk/duty-free outlet" },
    { term: "Cafeteria", definition: "Trainee dining area" },
    { term: "Crew messroom", definition: "Crew dining area" },
    { term: "Captain's stateroom", definition: "Captain's quarters" },
    { term: "Owner's cabin", definition: "Guest quarters" },
    { term: "Pantry", definition: "Food preparation/storage area" },
    { term: "Deck office", definition: "Administrative office" },
    { term: "Engineering workshop", definition: "Engine/mechanical work area" },
    { term: "Bosun's shop", definition: "Bosun's work/storage area" },
    { term: "Carpenter's shop", definition: "Woodworking area" },
    { term: "Laundry", definition: "Clothes washing facility" },
    {
      term: "Trainees' bathroom",
      definition: "Washing facilities for trainees",
    },
    { term: "Souvenir shop", definition: "Ship's store for merchandise" },
  ],
  "Equipment & Features": [
    { term: "Portholes", definition: "Circular windows on the ship" },
    { term: "Skylight", definition: "Deck window providing light below" },
    { term: "Hatches", definition: "Watertight openings" },
    {
      term: "Companionway hatch",
      definition: "Hatch over a companionway/stairway",
    },
    {
      term: "Pin rails",
      definition: "Rails along ship's sides for attaching running rigging",
    },
    {
      term: "Fife rail",
      definition: "Rail around base of mast for belaying pins",
    },
    { term: "Wheel", definition: "Ship's steering wheel" },
    { term: "Binnacle", definition: "Housing for magnetic compass" },
    { term: "Bearing compass", definition: "Compass for taking bearings" },
    {
      term: "Capstan/windlass",
      definition:
        "Large standing winch with bars for leverage to haul rope/hawser",
    },
    { term: "Davit", definition: "Crane for lowering boats" },
    { term: "Anchor crane", definition: "Crane for handling anchor" },
    { term: "Cathead", definition: "Structure for handling anchor" },
    { term: "MOB boat", definition: "Man Overboard rescue boat" },
    { term: "Funnel", definition: "Exhaust stack" },
    { term: "Vent", definition: "Ventilation opening" },
    { term: "Lantern housing", definition: "Navigation light housing" },
    {
      term: "Steering gear chest",
      definition: "Housing for steering mechanism",
    },
    {
      term: "Gangway opening",
      definition: "Opening in ship's side for boarding",
    },
    {
      term: "Chains (sounding platform)",
      definition: "Platform for taking depth soundings",
    },
    {
      term: "Hammocks",
      definition: "Sleeping apparatus attached to ceiling hooks",
    },
    { term: "Bunks", definition: "Beds with foam mattresses" },
    { term: "Ship's chest", definition: "Storage for belongings" },
  ],
  "Safety Equipment": [
    { term: "Safety harness", definition: "Worn when going aloft" },
    {
      term: "Footropes (horses)",
      definition: "Wires to stand on when working on yards/bowsprit",
    },
    { term: "Stirrups", definition: "Support footropes at intervals" },
    {
      term: "Flemish horse",
      definition: "Short footrope at outer end of yards",
    },
    {
      term: "Back lines",
      definition: "Wires for attaching harness behind you",
    },
    { term: "Safety lanyards", definition: "For attaching at crosstrees" },
    { term: "Bowsprit netting", definition: "Safety net on bowsprit" },
    {
      term: "Jacob's ladder",
      definition: "Ladder from topgallant shrouds to flagstaff",
    },
    { term: "Jack line", definition: "Extra safety ropes in rough weather" },
  ],
  "Ship Directions": [
    { term: "Fore/Forward", definition: "Front of ship" },
    { term: "Aft", definition: "Rear of ship" },
    {
      term: "Starboard",
      definition:
        "Right side (as seen from aft), indicated by green navigation lights",
    },
    {
      term: "Port",
      definition:
        "Left side (as seen from aft), indicated by red navigation lights",
    },
    { term: "Astern", definition: "Behind the ship" },
    { term: "Aloft", definition: "Up in the rigging" },
    { term: "Alongships", definition: "Lengthwise along ship" },
    {
      term: "Athwartship",
      definition:
        "Across the ship; from one side of a vessel to the other, perpendicular to the centerline and the direction of trave",
    },
  ],
  "Wind & Water": [
    { term: "Windward side", definition: "Side wind comes from" },
    {
      term: "Weather",
      definition: "Windward/exposed side (weather braces are on windward side)",
    },
    { term: "Lee", definition: "The side that wind is blowing towards" },
    { term: "Leeward", definition: "Downwind side" },
    {
      term: "In the lee",
      definition: "Protected from wind or weather by something",
    },
    { term: "Quarter", definition: "Area between beam and stern" },
    {
      term: "Beam",
      definition: "Widest point; perpendicular to ship's length",
    },
    { term: "Abaft of beam", definition: "Behind midpoint" },
    { term: "Eye of the wind", definition: "Direction wind is coming from" },
    { term: "Head to wind", definition: "Bow pointing directly into wind" },
    { term: "Head seas", definition: "Waves coming from ahead" },
    { term: "Wake", definition: "Water disturbance behind ship" },
  ],
  "Points of Sail": [
    {
      term: "Beating",
      definition: "Sailing toward wind by zigzagging on alternate tacks",
    },
    { term: "Leg", definition: "Stage sailed on one tack" },
    { term: "Tacking", definition: "Turning bow through wind" },
    { term: "Wearing ship", definition: "Turning stern through wind" },
    { term: "Reach", definition: "Sailing with wind from side" },
    { term: "Broad reach", definition: "Wind abaft of beam" },
    {
      term: "Close-hauled / By the wind",
      definition: "Sailing as close to wind as possible",
    },
    {
      term: "Full and by",
      definition: "Sailing with full sails close to wind",
    },
    { term: "Running", definition: "Sailing with wind from behind" },
    { term: "Running downwind", definition: "Sailing straight away from wind" },
    { term: "Run free", definition: "Sail loosely to wind" },
    { term: "Bear up hard", definition: "Sail very close to wind" },
  ],
  "Wind Terms": [
    { term: "Veering", definition: "Wind shifting clockwise" },
    { term: "Backing", definition: "Wind shifting counterclockwise" },
    { term: "Bearing away", definition: "Turning away from wind" },
    { term: "Coming about", definition: "Changing tack/course" },
    {
      term: "Relative wind",
      definition: "Apparent wind direction affected by ship's speed",
    },
    { term: "Blanketed", definition: "Sails blocked from wind by other sails" },
  ],
  "Navigation Methods": [
    {
      term: "Navigate",
      definition:
        "Determine a course and find a navigable route across the sea",
    },
    {
      term: "Dead reckoning",
      definition: "Navigating by calculating course, speed, and time taken",
    },
    {
      term: "Electronic navigation",
      definition: "Determining position using GPS, ECDIS, and radar",
    },
    {
      term: "Astronomical navigation",
      definition: "Determining position by observation of celestial bodies",
    },
    {
      term: "Terrestrial navigation",
      definition: "Determining position by compass bearings of known landmarks",
    },
  ],
  "Navigation Instruments": [
    {
      term: "Compass rose",
      definition: "Diagram showing cardinal and intercardinal directions",
    },
    {
      term: "Sextant",
      definition:
        "Instrument for measuring angles between celestial bodies and horizon",
    },
    {
      term: "Chronometer",
      definition: "Precision timepiece for determining longitude",
    },
    {
      term: "Nautical almanac",
      definition: "Reference tables for celestial navigation",
    },
    {
      term: "GPS",
      definition: "Global Positioning System (satellite navigation)",
    },
    {
      term: "ECDIS",
      definition: "Electronic Chart Display and Information System",
    },
    {
      term: "Radar",
      definition:
        "Radio detection and ranging for position and collision avoidance",
    },
  ],
  "Sailing Concepts": [
    {
      term: "Draw",
      definition: "When sail fills with wind and produces power",
    },
    { term: "Heels", definition: "Ship leans from wind pressure" },
    { term: "Bent on", definition: "Sail attached to yard" },
    { term: "Tack tackle", definition: "Temporary tackle for setting courses" },
    { term: "Wind rudder", definition: "How mizzen acts for balancing ship" },
    { term: "Full spread of canvas", definition: "All sails set" },
    { term: "Making way", definition: "Approaching destination" },
    { term: "Lose ground", definition: "Get further from destination" },
    { term: "Steerage way", definition: "Enough speed to steer" },
    { term: "Drift", definition: "Sideways movement from wind/current" },
    {
      term: "Weather helm",
      definition: "Ship's tendency to turn into wind if unattended",
    },
    {
      term: "In irons",
      definition: "Stopped dead, bow into wind, unable to maneuver",
    },
    {
      term: "Gybing",
      definition: "Yacht equivalent of wearing (dangerous on schooners)",
    },
    { term: "Broaching", definition: "Uncontrolled dangerous turn" },
    { term: "Tender", definition: "Small boat launched from ship" },
    { term: "Port tender", definition: "Tender on port side" },
    { term: "Starboard tender", definition: "Tender on starboard side" },
  ],
  "Line Preparation": [
    {
      term: "Standby to / Ready",
      definition: "Prepare, take turns off belaying pins",
    },
    { term: "Flaked out", definition: "Lines laid out ready to run" },
  ],
  "Hauling Commands": [
    { term: "Haul / Heave", definition: "Pull on line (heave = lifting)" },
    { term: "Haul taut", definition: "Take in slack, tighten" },
    {
      term: "Hand over hand",
      definition: "Stationary hauling, alternating hands",
    },
    {
      term: "Walk up the line",
      definition: "Walking while hauling in rotation",
    },
    {
      term: "Sweat / Swig the line",
      definition: "Pull loaded line off angle for slack",
    },
  ],
  "Releasing Commands": [
    {
      term: "Slack off / Ease away / Pay out",
      definition: "Release load on lines",
    },
    { term: "Let go", definition: "Release and let line run freely" },
  ],
  "Securing Commands": [
    { term: "AVAST", definition: "Stop temporarily, hold fast" },
    { term: "Turn on / Belay", definition: "Wrap around belaying pin" },
    { term: "Make fast", definition: "Secure to belaying pin" },
    {
      term: "Square up",
      definition: "Tighten lines and coil tails after manoeuvre",
    },
    { term: "Come up", definition: "Slip line and cast forward" },
  ],
  "Setting Sails": [
    { term: "Set sail", definition: "Deploy sail to catch wind" },
    {
      term: "Loose the sail",
      definition: "Cast off gaskets and let sail fall",
    },
    { term: "Hanked up", definition: "Gaskets secured out of way" },
    { term: "Sheet home", definition: "Haul sheets to set square sail" },
    { term: "Sheet the [sail]", definition: "Haul sheets to set" },
    { term: "Sheet in", definition: "Haul in sheet (opposite of ease)" },
    { term: "Hoist / Lower", definition: "Raise/lower via halyard" },
  ],
  "Dousing Sails": [
    { term: "Douse sail", definition: "Take sail in" },
    {
      term: "Clew up",
      definition: "Douse square sail with clewlines/buntlines",
    },
    { term: "Reduce sail", definition: "Decrease sail area" },
    { term: "Give up sheets", definition: "Release sheets" },
  ],
  Furling: [
    { term: "Furl sail", definition: "Pack and secure with gaskets" },
    {
      term: "Fish the sail",
      definition: "Gather sail up an arm's length at a time",
    },
    {
      term: "Protective doubling",
      definition: "Last fold of sail used as bag",
    },
  ],
  "Sail Commands - Other": [
    {
      term: "Cast off",
      definition: "Release gaskets; release line; take in mooring",
    },
    {
      term: "Trim",
      definition: "Fine-tune yard angles or sheets for optimal shape",
    },
  ],
  "Bracing Commands": [
    {
      term: "Brace round",
      definition:
        "Haul weather braces until yards at opposite angle, switch tacks",
    },
    {
      term: "Square the yard",
      definition: "Brace yard athwartships (perpendicular to ship)",
    },
    {
      term: "Brace in and shiver",
      definition:
        "Brace parallel to wind, sails lose power ('shivering/luffing the sails')",
    },
    {
      term: "Brace sharp up",
      definition: "Brace at sharper angle, sails fill closer to wind",
    },
    {
      term: "Ease the braces",
      definition: "Brace more square for wind from aft",
    },
    {
      term: "Fanning the yards",
      definition: "Bracing lower yards hardest, upper yards at easier angles",
    },
    {
      term: "Negative fanning",
      definition: "Upper sails at sharpest angle (very close-hauled sailing)",
    },
    {
      term: "Brace aback",
      definition: "Brace main mast so sails back, stopping ship",
    },
    { term: "Haul round aft", definition: "Brace main mast around" },
    { term: "Brace round forward", definition: "Brace foremast around" },
    {
      term: "Brace the main and shiver",
      definition: "Depower main mast sails",
    },
    { term: "Close-haul marks", definition: "Reference marks on braces" },
  ],
  "Stopping Maneuvers": [
    {
      term: "Lie to / Heave to",
      definition: "Steer into wind until sails stop drawing",
    },
    {
      term: "Brace aback",
      definition: "Brace main mast so sails back, stopping ship",
    },
  ],
  "Tacking Commands": [
    { term: "Stand by to come about", definition: "Prepare to tack" },
    { term: "Come about", definition: "Change tack by tacking" },
    { term: "All hands on deck", definition: "Everyone needed" },
  ],
  "Wearing Ship": [
    { term: "Stand by to wear ship", definition: "Prepare to wear" },
    {
      term: "Haul over the mizzen",
      definition: "Change tack while sail is set",
    },
  ],
  "Helm Commands": [
    { term: "Put the helm to port/starboard", definition: "Turn wheel" },
    { term: "Fall away", definition: "Bear away from wind" },
  ],
  "Crew Positions": [
    { term: "Captain", definition: "Commanding officer" },
    { term: "Chief Officer", definition: "Second in command" },
    { term: "First Officer", definition: "Third in command" },
    { term: "Chief Engineer", definition: "Head of engineering department" },
    { term: "First Engineer", definition: "Assistant to chief engineer" },
    { term: "Chief Steward", definition: "Head of catering/hospitality" },
    { term: "Steward", definition: "Catering/hospitality crew" },
    { term: "Bosun", definition: "Work supervisor" },
    { term: "Carpenter", definition: "Shipboard woodworker" },
    { term: "Cook", definition: "Prepares meals" },
    { term: "Doctor", definition: "Ship's medical officer" },
    { term: "Able seamen", definition: "Watch leaders" },
    { term: "Ordinary seamen", definition: "Watch leader assistants" },
    { term: "Watch-officer", definition: "Officer in charge of watch" },
    { term: "Ship's sergeant", definition: "Primary trainee contact" },
    { term: "Hands", definition: "Crew members" },
  ],
  "Watch Terms": [
    { term: "Watch", definition: "Duty shift (blue, red, white watches)" },
    { term: "Helm watch", definition: "Steering duty" },
    { term: "Lookout watch", definition: "Observation duty" },
    { term: "MOB watch", definition: "Man Overboard watch" },
    { term: "Fire watch / Deck watch", definition: "Safety monitoring duty" },
    { term: "Mustering station", definition: "Emergency assembly point" },
    { term: '"HOY!"', definition: "Response when called during muster" },
  ],
};

// Category groups for accordion display
const categoryGroups = [
  {
    name: "The Ship",
    categories: ["Ship Specifications", "Masts", "Spars"],
  },
  {
    name: "Sails",
    categories: [
      "Jibs (Headsails)",
      "Staysails",
      "Square Sails - Foremast",
      "Square Sails - Mainmast",
      "Mizzen Sails",
      "Sail Types",
      "Sail Parts",
    ],
  },
  {
    name: "Rigging",
    categories: [
      "Standing Rigging",
      "Control Lines",
      "Dousing Lines",
      "Line Parts & Hardware",
      "Ropework",
    ],
  },
  {
    name: "Ship Structure",
    categories: [
      "Hull Structure",
      "Deck Structure",
      "Main Deck Areas",
      "Below Deck",
      "Equipment & Features",
    ],
  },
  {
    name: "Safety",
    categories: ["Safety Equipment"],
  },
  {
    name: "Navigation & Direction",
    categories: [
      "Ship Directions",
      "Wind & Water",
      "Points of Sail",
      "Wind Terms",
      "Navigation Methods",
      "Navigation Instruments",
    ],
  },
  {
    name: "Sailing",
    categories: ["Sailing Concepts"],
  },
  {
    name: "Line Commands",
    categories: [
      "Line Preparation",
      "Hauling Commands",
      "Releasing Commands",
      "Securing Commands",
    ],
  },
  {
    name: "Sail Commands",
    categories: [
      "Setting Sails",
      "Dousing Sails",
      "Furling",
      "Sail Commands - Other",
    ],
  },
  {
    name: "Maneuvering",
    categories: [
      "Bracing Commands",
      "Stopping Maneuvers",
      "Tacking Commands",
      "Wearing Ship",
      "Helm Commands",
    ],
  },
  {
    name: "Crew & Watches",
    categories: ["Crew Positions", "Watch Terms"],
  },
];

// Get category groups
function getCategoryGroups() {
  return categoryGroups;
}

// Get all categories
function getCategories() {
  return Object.keys(vocabulary);
}

// Get terms for a category
function getTerms(category) {
  return vocabulary[category] || [];
}

// Get all terms flattened
function getAllTerms() {
  const allTerms = [];
  for (const category in vocabulary) {
    vocabulary[category].forEach((item) => {
      allTerms.push({ ...item, category });
    });
  }
  return allTerms;
}

// Shuffle array
function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Ship Diagram Quiz Data
// Positions are percentages for responsive positioning
// Based on the ship diagram from the handbook (page 20)
// Labels are positioned where the text appears in the original diagram
const shipDiagramQuiz = {
  labels: [
    // Top-left staysails (stacked vertically)
    {
      id: "mizzen-topgallant-staysail",
      answer: "Mizzen topgallant staysail",
      x: 40,
      y: 9,
    },
    {
      id: "mizzen-topmast-staysail",
      answer: "Mizzen topmast staysail",
      x: 40,
      y: 11,
    },
    { id: "mizzen-staysail", answer: "Mizzen staysail", x: 40, y: 13 },

    // Mast labels at top
    { id: "mainmast", answer: "Mainmast", x: 52, y: 11 },
    { id: "foremast", answer: "Foremast", x: 70, y: 11 },

    // Main staysails (stacked, between mainmast and foremast)
    // todo
    { id: "main-royal-staysail", answer: "Main royal staysail", x: 60, y: 9 },
    {
      id: "main-topgallant-staysail",
      answer: "Main topgallant staysail",
      x: 58,
      y: 11,
    },
    {
      id: "main-topmast-staysail",
      answer: "Main topmast staysail",
      x: 58,
      y: 14,
    },

    // Mizzenmast label
    { id: "mizzenmast", answer: "Mizzenmast", x: 39, y: 19 },

    // Mainmast sails (labels on the sails)
    { id: "main-royal", answer: "Main royal", x: 53, y: 21 },
    {
      id: "main-topgallant-sail",
      answer: "Main topgallant sail",
      x: 53,
      y: 31,
    },
    { id: "main-upper-topsail", answer: "Main upper topsail", x: 53, y: 43 },
    { id: "main-lower-topsail", answer: "Main lower topsail", x: 53, y: 52 },
    { id: "main-course", answer: "Main course (mainsail)", x: 53, y: 64 },

    // Foremast sails (labels on the sails)
    { id: "fore-royal", answer: "Fore royal", x: 70, y: 21 },
    {
      id: "fore-topgallant-sail",
      answer: "Fore topgallant sail",
      x: 70,
      y: 32,
    },
    { id: "fore-upper-topsail", answer: "Fore upper topsail", x: 70, y: 43 },
    { id: "fore-lower-topsail", answer: "Fore lower topsail", x: 70, y: 52 },
    { id: "fore-course", answer: "Fore course", x: 70, y: 64 },

    // Mizzen sails (left side)
    { id: "mizzen-gaff-topsail", answer: "Mizzen gaff topsail", x: 22, y: 40 },
    { id: "mizzen-sail", answer: "Mizzen sail", x: 22, y: 43 },

    // Jibs (right side labels, stacked)
    { id: "flying-jib", answer: "Flying jib", x: 95, y: 52 },
    { id: "outer-jib", answer: "Outer jib", x: 95, y: 56 },
    { id: "inner-jib", answer: "Inner jib", x: 95, y: 59 },
    {
      id: "fore-topmast-staysail",
      answer: "Fore topmast staysail",
      x: 95,
      y: 62,
    },

    // Bowsprit (right side)
    { id: "bowsprit", answer: "Bowsprit", x: 94, y: 73 },

    // Deck areas (bottom labels)
    { id: "poop", answer: "Poop", x: 31, y: 85 },
    { id: "chart-house", answer: "Chart house", x: 38, y: 85 },
    {
      id: "engine-room-skylight",
      answer: "Engine room skylight",
      x: 44,
      y: 85,
    },
    { id: "half-deck", answer: "Half deck", x: 50, y: 85 },
    { id: "main-deck", answer: "Main deck", x: 58.5, y: 84 },
    { id: "companionways", answer: "Companionways", x: 58.5, y: 87 },
    { id: "galley", answer: "Galley", x: 67, y: 85 },
    { id: "forecastle", answer: "Forecastle", x: 83, y: 85 },
  ],
};

function getShipDiagramQuiz() {
  return shipDiagramQuiz;
}
