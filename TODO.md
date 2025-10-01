# Add Team Name, Club Name, Coach Name to Registration

## Tasks
- [x] Update Player interface in lib/types.ts to include teamName, clubName, coachName (optional fields)
- [x] Update formData state in app/register/page.tsx to include teamName, clubName, coachName
- [x] Add input fields for Team Name, Club Name, Coach Name in Step 1 of registration form
- [ ] Test the registration form to ensure new fields are saved correctly

## Notes
- New fields are optional as not all players may have team/club information
- Fields will be added to the Player Info step of the registration form
- No changes needed to auth.ts as register function accepts all Player fields except id and createdAt
