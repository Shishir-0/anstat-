import assert from 'node:assert';
import { WEBMCP_TOOLS, registerWebMCPTools, ANSTAT_COMPANY_DATA } from '../src/utils/webmcp.js';

console.log('🧪 Testing ANSTAT WebMCP Implementation...');

// 1. Verify all 5 required tools exist
assert.strictEqual(WEBMCP_TOOLS.length, 5, 'Must expose exactly 5 operational tools');

const toolNames = WEBMCP_TOOLS.map(t => t.name);
const expectedTools = [
  'anstat_get_company_info',
  'anstat_discover_services',
  'anstat_get_service_details',
  'anstat_find_case_studies',
  'anstat_get_contact_channels'
];

for (const name of expectedTools) {
  assert.ok(toolNames.includes(name), `Missing expected tool: ${name}`);
}
console.log('  ✅ 1. All 5 operational WebMCP tools present');

// 2. Test Tool 1: anstat_get_company_info
const toolCompany = WEBMCP_TOOLS.find(t => t.name === 'anstat_get_company_info');
const companyInfo = await toolCompany.execute({});
assert.strictEqual(companyInfo.name, 'ANSTAT');
assert.strictEqual(companyInfo.headquarters, 'Bengaluru, Karnataka, India');
assert.strictEqual(companyInfo.email, 'connect@anstat.co.in');
assert.ok(companyInfo.ipPolicy.includes('100% client intellectual property ownership'));
assert.ok(companyInfo.dataGovernance.includes('Strict enterprise data isolation'));
assert.ok(companyInfo.pricingModel.includes('Milestone-based'));
console.log('  ✅ 2. anstat_get_company_info returns verified structured output');

// 3. Test Tool 2: anstat_discover_services
const toolServices = WEBMCP_TOOLS.find(t => t.name === 'anstat_discover_services');
const allServices = await toolServices.execute({});
assert.strictEqual(allServices.divisions.length, 4);

const techDivision = await toolServices.execute({ divisionId: 'technology' });
assert.strictEqual(techDivision.division.name, 'ANSTAT Technology');
assert.ok(techDivision.division.startingScope.includes('₹50,000'));

const invalidDiv = await toolServices.execute({ divisionId: 'invalid-id' });
assert.ok(invalidDiv.error, 'Invalid divisionId must return an error');
console.log('  ✅ 3. anstat_discover_services handles filters and validation');

// 4. Test Tool 3: anstat_get_service_details
const toolDetails = WEBMCP_TOOLS.find(t => t.name === 'anstat_get_service_details');
const missingQuery = await toolDetails.execute({});
assert.ok(missingQuery.error, 'Missing query must return descriptive error');

const aiDetails = await toolDetails.execute({ query: 'rag' });
assert.ok(aiDetails.matchCount >= 1, 'Should match RAG in AI division');
assert.ok(aiDetails.results[0].division.includes('AI'));

const softwareDetails = await toolDetails.execute({ query: 'software' });
assert.ok(softwareDetails.matchCount >= 1);
console.log('  ✅ 4. anstat_get_service_details validates input and searches accurately');

// 5. Test Tool 4: anstat_find_case_studies
const toolCaseStudies = WEBMCP_TOOLS.find(t => t.name === 'anstat_find_case_studies');
const allCases = await toolCaseStudies.execute({ industry: 'all' });
assert.strictEqual(allCases.caseStudies.length, 6);

const eduCases = await toolCaseStudies.execute({ industry: 'education' });
assert.ok(eduCases.count >= 1);
assert.ok(eduCases.caseStudies.some(c => c.client.includes('GradLink') || c.client.includes('Universal PU')));
console.log('  ✅ 5. anstat_find_case_studies filters client evidence safely');

// 6. Test Tool 5: anstat_get_contact_channels
const toolContact = WEBMCP_TOOLS.find(t => t.name === 'anstat_get_contact_channels');
const contactInfo = await toolContact.execute();
assert.strictEqual(contactInfo.email, 'connect@anstat.co.in');
assert.strictEqual(contactInfo.phone, '+919019731057');
assert.ok(contactInfo.consultationUrl.includes('https://anstat.co.in/contact'));
console.log('  ✅ 6. anstat_get_contact_channels returns contact channels');

// 7. Test Feature Detection on document.modelContext (Standard W3C spec)
const registeredTools = [];
global.window = {};
global.document = {
  modelContext: {
    registerTool: (tool) => {
      registeredTools.push(tool);
    }
  }
};

const registrationResult = registerWebMCPTools();
assert.strictEqual(registrationResult.registered, true);
assert.strictEqual(registrationResult.count, 5);
assert.strictEqual(registrationResult.location, 'document.modelContext');
assert.strictEqual(registeredTools.length, 5);
console.log('  ✅ 7. Feature detection successfully registers on document.modelContext');

// 8. Test Feature Detection fallback on navigator.modelContext
const navTools = [];
delete global.document.modelContext; // remove document.modelContext

// In Node 21+, navigator is a built-in getter on globalThis, so we attach modelContext to it
if (typeof navigator !== 'undefined') {
  Object.defineProperty(navigator, 'modelContext', {
    value: {
      registerTool: (tool) => {
        navTools.push(tool);
      }
    },
    configurable: true,
    writable: true
  });
}

const navResult = registerWebMCPTools();
assert.strictEqual(navResult.registered, true);
assert.strictEqual(navResult.count, 5);
assert.strictEqual(navResult.location, 'navigator.modelContext');
console.log('  ✅ 8. Feature detection successfully falls back to navigator.modelContext');
console.log('  ✅ 8. Feature detection successfully falls back to navigator.modelContext');

console.log('\n🎉 ALL 8 WEBMCP TESTS PASSED!\n');
